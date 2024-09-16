import React, { useEffect } from 'react'
import styles from './NavPage.module.css'
import { motion } from 'framer-motion'
import { useState, useRef, memo } from 'react'
import { Link } from 'react-router-dom' 
import BackTo from '../../components/BackTo'

const NavPage = () => {
  const title = ['Tất cả sách', 'Combo sách', 'Văn học', 'Kinh tế', 'Tâm lí học', 'Tiểu thuyết', 'Khoa học']

  return (
    <motion.div
      initial={{x: -300, opacity: 0}}
      animate={{x:0, opacity: 1}}
      transition={{
        duration: 0.2,
      }}
      exit={{x: 300, opacity: 0}}
    >
      <BackTo />
      <div className={styles.title}>{title.map((cur, index)=>(
        <Link to='/' state={cur} 
          key={index} 
        >
        <p className={styles.title_content}>{cur}</p></Link>
      ))}
      </div>
    </motion.div>
  )
}


export default NavPage
