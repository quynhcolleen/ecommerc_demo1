import React from 'react'
import styles from './Filter.module.css'
import { useLocation } from 'react-router-dom'

const Filter = () => {
  const location = useLocation()
  const filter = location.state
  
  return (
    <div className={styles.filter}>
      <div className={styles.filter_title}>{filter || 'Tất cả sách'}</div>
      <div className={styles.filter_button}>Lọc</div>
    </div>
  )
}

export default Filter