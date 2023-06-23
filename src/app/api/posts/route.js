import Post from '@/models/Post';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  const url = new URL(req.url);

  const username = url.searchParams.get('username');
  //fetch
  try {
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);
  //fetch
  try {
    await connect();
    await newPost.save();
    return new NextResponse('New post created', { status: 201 });
  } catch (error) {
    return new NextResponse(`Database Error: ${error}`, { status: 500 });
  }
};
