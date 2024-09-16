import React from 'react'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import Filter from '../../components/Filter'
import ProductList from '../../components/ProductList'
import { motion } from 'framer-motion'
import styles from './Home.module.css'

const Home = () => {
  return (
    <motion.div className={styles.home}
      initial={{x: -100, opacity: 0}}
      animate={{x:0, opacity: 1}}
      transition={{
        duration: 0.2,
      }}
      exit={{x: 100, opacity: 0}}
    >
      <Hero />
      <NavBar />
      <ProductList />
    </motion.div>
  )
}

export default Home