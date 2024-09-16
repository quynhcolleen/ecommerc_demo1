import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <p className={styles.title}>--Về chúng tôi--</p>
      <h2 className={styles.subtitle}>Sách này là để xây trường</h2>
      <p className={styles.description}>
        Toàn bộ tiền ủng hộ sách sẽ được chuyển về quỹ dự án
      </p>
    </footer>
  );
};

export default Footer