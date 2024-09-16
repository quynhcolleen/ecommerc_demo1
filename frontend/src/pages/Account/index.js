import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import BackTo from '../../components/BackTo'
import styles from './Account.module.css'
import clsx from 'clsx'
import Footer from '../../components/Footer'
import { DataContext } from '../../context/DataProvider'
import { useParams } from 'react-router-dom'
const Account = () => {

  const [account, setAccount] = useState({})
  const [accounts] = useContext(DataContext)
  const accountId = useParams()
  const fetchAccountData = async() =>{
    accounts.map((cur)=>{
      if (cur.id === accountId){
        setAccount(cur)
      }
    })
  }
  
  useEffect(()=>{
    fetchAccountData()
  }, [])


  return (
    <motion.div
      initial={{x: -100, opacity: 0}}
      animate={{x:0, opacity: 1}}
      transition={{
        duration: 0.2,
      }}
      exit={{x: 100, opacity: 0}}
    >
      <BackTo />
      <div className={clsx(styles.avatar_site)}>
        <img src={account.photo} alt={account.name} className={styles.avatar}/>
        <h1>{account.name}</h1>
      </div>
      <div className={styles.info_site}>
        <ul className='d-flex-column'>
          <li>
            <p>Email</p>
            <p>{account.email}</p>
          </li>
          <li>
            <p>Số điện thoại</p>
            <p>{account.phone}</p>
          </li>
          <li>
            <p>Ngày sinh</p>
            <p></p>
          </li>
          <li>
            <p>Giói tính</p>
            <p>{account.gender}</p>
          </li>
        </ul>

        <ul className='d-flex-column'>
          <li>
            <p>Số sách đã mua</p>
            <p>{account.books_purchased}</p>
          </li>
          <li>
            <p>Số tiền đã quyên góp</p>
            <p>{account.donation_amount}</p>
          </li>
        </ul>
      </div>
      <div className='d-flex-column'>
        <button className={styles.logout}>Đăng xuất</button> 
      </div>
      <Footer  />
    </motion.div>
  )
}

export default Account