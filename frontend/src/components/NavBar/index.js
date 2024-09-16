import React from 'react'
import { useState } from 'react'

import {assets} from '../../assets/assets'
import styles from './NavBar.module.css'
import Cart from '../../pages/Cart'
import Search from '../Search'
import About from '../../pages/About'
import Validation from '../../pages/Validation'
import NavPage from '../../pages/NavPage'
import { Link } from 'react-router-dom'
import { getCartItems } from '../CartAPI'

const NavBar = () => {
  const [value, setValue] = useState('')
  return (
    <>
      {/* <div className={styles.nav}>
          <Link to='/nav' element={<NavPage />} ><img src={assets.nav_icon} className='icon' alt='#'/></Link>
          <div className={styles.search_site}>
            <input 
              className={styles.search} 
              placeholder='Tìm kiếm nhanh' 
              value={value}
              onChange={(e)=>setValue(e.target.value)}
            />
            {value && <Search value={value} type='fast_search' />}
          </div>
          <Link to='/cart' element={<Cart />}><img src={assets.cart_icon} className='icon' alt='#'/></Link>
          <img src={assets.heart_icon} className='icon' alt='#'/>
      </div> */}
      <div className={styles.nav_desktop}>
          <Link to='/about' element={<About />} className='d-flex-center'>
            <img src={assets.heart_black} className='icon'/>
            Chúng tôi
          </Link>
          <div className={styles.logo}>
            <img src={assets.logo3} style={{height:60, width: 170, objectFit: 'contain'}}/>
          </div>
          <ul className={styles.nav_desktop_side}>
            <li>
              <Link to='/search' element={<Search />}><img src={assets.search_icon} className='icon'/></Link>
            </li>
            <li>
              <Link to='/cart' element={<Cart />}><img src={assets.shopping_cart_black} className='icon'/></Link>
            </li>
            <li>
              <Link to='/validation' element={<Validation />}><img src={assets.account_black} className='icon'/></Link>  
            </li>
            <li>
              <Link className='d-flex-center'>
                <img src={assets.nav_icon} className='icon'/>
                MENU
              </Link>
            </li>
          </ul>
      </div>
      <div className={styles.nav_mobile}>
        <input 
          type='text' 
          placeholder='Tìm kiếm' 
          className={styles.nav_mobile_search}
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        {value && <Search value={value} type='fast_search' />}
        <Link><img src={assets.nav_icon} className='icon'/></Link>
      </div>
    </>
  )
}

export default NavBar