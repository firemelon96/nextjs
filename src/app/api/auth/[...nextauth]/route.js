import connect from '@/utils/db';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      id: 'credentials',
      name: 'credentials',
      async authorize(credentials) {
        await connect();

        try {
          const userExist = await User.findOne({ email: credentials.email });

          if (userExist) {
            //check password
            const isPasswordMatch = await bcrypt.compare(
              credentials.password,
              userExist.password
            );
            if (isPasswordMatch) {
              return userExist;
            } else {
              throw new Error('Incorrect password');
            }
          } else {
            throw new Error('User not found');
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
});

export { handler as GET, handler as POST };
