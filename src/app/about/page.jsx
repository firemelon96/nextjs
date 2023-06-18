import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/image2.jpg' fill={true} alt='' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            fsdfadfasdfasdf fdsfaf dsfaaaaaaa sdaf fsfsafsdfafsfsf
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
            fsdfads fsdfadfasdfasdf fdsfaf dsfaaaaaaa sdaf fsfsafsdfafsfsf
            fsdfadfasdfasdf fdsfaf dsfaaaaaaa sdaf fsfsafsdfafsfsf
          </p>
          <Button text='Contact us' url='/contact' />
        </div>
      </div>
    </div>
  );
};

export default About;
