'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';
import Image from 'next/image';

const Dashboard = () => {
  const router = useRouter();

  /*
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
      });

      if (!res.ok) throw new Error('Failed to fetch data');

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []);
  */
  const { data: session, status } = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.user.name}`,
    fetcher
  );

  if (status === 'unauthenticated') router.push('/dashboard/login');

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session?.user?.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading
          ? 'loading...'
          : data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image src={post.image} alt='' width={300} height={200} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type='text' placeholder='Title' className={styles.input} />
        <input type='text' placeholder='Description' className={styles.input} />
        <input type='text' placeholder='Image link' className={styles.input} />
        <textarea
          placeholder='Content'
          className={styles.textArea}
          cols='30'
          rows='10'
        ></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Dashboard;
