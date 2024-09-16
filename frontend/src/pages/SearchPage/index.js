import React, { useState } from 'react'
import Search from '../../components/Search'
import styles from './SearchPage.module.css'
import { assets } from '../../assets/assets'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const SearchPage = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    return (
        <motion.div
            initial={{x: -100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{
                duration: 0.2,
              }}
            exit={{x: 100, opacity: 0}}
        >
            <div 
                className={clsx(styles.search_field)}>
                <input 
                    className={styles.search} 
                    placeholder='Tìm kiếm sách' 
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                />
                <img src={assets.heart_icon} />
                <img 
                    src={assets.back_page} 
                    onClick={()=>navigate(-1)}
                />
            </div>
            {value && <Search value={value}/>}
        </motion.div>
  )
}

export default SearchPage