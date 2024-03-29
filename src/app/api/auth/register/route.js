import connect from '@/utils/db';
import { NextResponse } from 'next/server';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('User created successfully', { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
