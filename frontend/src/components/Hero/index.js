import React, { useEffect, useState } from 'react';
import Cart from '../../pages/Cart';
import styles from './Hero.module.css';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { getCartItems } from '../CartAPI';

const Hero = () => {
  const [quantity, setQuantity] = useState(0);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartItems = await getCartItems();
      setQuantity(cartItems.length);
    };
    fetchCartItems();
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Calculate opacity based on scroll position
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const maxScroll = 600; // Adjust this value to control when the fade starts
  //     const newOpacity = Math.max(1 - scrollTop / maxScroll, 0.3);
  //     setScrollOpacity(newOpacity);
  //   };

  //   // Add event listener for scroll
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup event listener on unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className={styles.hero_mobile}>
        <div className={styles.hero_mobile_heading1}>
          <img src={assets.logo1} width={40} height={40} />
          <h3>Hi, there</h3>
        </div>
        <div className={styles.hero_mobile_heading2}>
          <Link to='/cart' element={<Cart />}>
            <img src={assets.shopping_cart} width={40} height={40} />
          </Link>
          <div className={styles.hero_mobile_quantity_items}>{quantity}</div>
        </div>
      </div>
      <motion.div
        className={clsx(styles.hero_desktop)}
        style={{ opacity: scrollOpacity }}
      >
        <motion.div
          className={styles.hero_desktop_heading1}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 180, opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ x: "100%", opacity: 0 }}
        >
          NUÔI
        </motion.div>
        <motion.div
          width={'80%'}
          className={styles.hero_desktop_heading2}
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 850, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          exit={{ x: 0, opacity: 0 }}
        >
          EM
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
