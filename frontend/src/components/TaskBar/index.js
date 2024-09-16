import { React, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './TaskBar.module.css'
import { assets } from '../../assets/assets'

import Cart from '../../pages/Cart'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Search from '../../pages/SearchPage'
import Validation from '../../pages/Validation'
import Account from '../../pages/Account'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const TaskBar = () => {
  const location = useLocation()
  const [page, setPage] = useState('/')
  useEffect(()=>{
    setPage(location.pathname)
  })

  const isActive = (id) =>{
    return id == page ? 'accent' : 'black'
  }
  
  return (
    <motion.div>
      <ul className={styles.taskBar}>
        <li>
          <Link to='/' element={<Home />} className={clsx('d-flex-column', 'hoverEffect')}>
            <img src={assets[`shop_${isActive('/')}`]} className={styles.taskBar_icon} alt='#'/>
            <strong className={isActive('/')}>Trang chủ</strong>
          </Link>
        </li>
        <li>
          <Link to='/search' element={<Search />} className={clsx('d-flex-column', 'hoverEffect')} >
            <img 
              src={assets[`search_list_${isActive('/search')}`]}
              className={styles.taskBar_icon} 
              alt='#'
            />
            <strong className={isActive('/search')}>Tìm kiếm</strong> 
          </Link>
        </li>
        <li>
          <Link to='/cart' element={<Cart />} className={clsx('d-flex-column', 'hoverEffect')}>
            <img src={assets[`shopping_cart_${isActive('/cart')}_2`]} className={styles.taskBar_icon} alt='#'/>
            <strong className={isActive('/cart')}>Giỏ hàng</strong>
          </Link>
        </li>
        <li> 
          <Link to = '/about' element={<About />} className={clsx('d-flex-column', 'hoverEffect')} >
            <img 
              src={assets[`heart_${isActive('/about')}`]}
              className={styles.taskBar_icon} 
              alt='#'
            />
            <strong className={isActive('/about')}>Chúng tôi</strong>
          </Link>
        </li>
        <li>
          <Link to='/validation' element={<Validation />} className={clsx('d-flex-column', 'hoverEffect')}>
            <img src={assets[`account_${isActive('/validation')}_2`]} className={styles.taskBar_icon} alt='#'/>
            <strong className={isActive('/account')}>Bạn</strong>  
          </Link>
        </li>
        
        
      </ul>
    </motion.div>
  )
}

export default TaskBar