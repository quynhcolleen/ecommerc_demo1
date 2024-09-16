import React, { useContext } from 'react'
import styles from './Search.module.css'
import { DataContext } from '../../context/DataProvider'
import ProductItem from '../ProductItem'
import { motion } from 'framer-motion'

const Search = ({ value, type }) => {
  const diacritics = require('diacritics') //Xóa dấu của ký tự
  const [products] = useContext(DataContext)
  const searchResult = products.filter((cur)=>{
    const name = diacritics.remove(cur.name.toLowerCase())   
    return name.includes(diacritics.remove(value.toLowerCase()))
  })
  
  return (
    <motion.div
    >
      {type === 'fast_search' ? <div className={styles.fast_search}>
          { (searchResult.length !== 0) ? searchResult.map((cur, index)=>
            <ProductItem.Search
              key={index} 
              product={cur}
            />
          ) : <div className={styles.not_found}>Not found product!<br/>Please check again.</div>}
      </div>:
      <div className={styles.search}>
        { (searchResult.length !== 0) ? searchResult.map((cur, index)=>
          <ProductItem.Search
            key={index} 
            product={cur}
          />
        ) : <div className={styles.not_found}>Not found product!<br/>Please check again.</div>}
      </div>
      }
    </motion.div>
  )
}

export default Search