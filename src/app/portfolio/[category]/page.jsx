import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const Category = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image src='/pic1.jpg' alt='' fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image src='/pic1.jpg' alt='' fill={true} className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image src='/pic1.jpg' alt='' fill={true} className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Category;
