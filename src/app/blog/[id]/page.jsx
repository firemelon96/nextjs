import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1>Lorem lorem lorem conmeettoer</h1>
          <p className={styles.desc}>
            lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge
          </p>
          <div className={styles.author}>
            <Image src={} alt='' width={40} height={40} className={styles.avatar}/>
            <span className={styles.username}>John DOe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={} alt='' fill={true} className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge
        <br/>
        <br/>
        lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge
        <br/>
        <br/>
        lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge lorem dolor emet fdsf aemet const pokemon kdofaa faorss teretur doloremge
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
