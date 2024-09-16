import React from 'react'
import { assets } from '../../assets/assets'

import styles from './NextPage.module.css'

const NextPage = () => {
  return (
    <div className={styles.nextPage}>
        <img src={assets.back} alt="back" className='icon'/>
        <img src={assets.next} alt="next" className='icon'/>
    </div>
  )
}

export default NextPage