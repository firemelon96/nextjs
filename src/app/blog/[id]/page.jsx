import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

async function getData(id) {
  const res = await fetch(`/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params: { id } }) => {
  const data = await getData(id);
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.image}
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
