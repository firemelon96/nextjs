import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

export const metadata = {
  title: 'Lama dev Contact page',
  description: 'This is description of contact',
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.svg'
            alt='contact'
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input} />
          <input type='email' placeholder='email' className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder='message'
            cols='30'
            rows='10'
          ></textarea>
          <Button url='#' text='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
