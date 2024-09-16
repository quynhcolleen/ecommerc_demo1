import React, { useEffect, useState, useContext } from 'react'
import BackTo from '../../components/BackTo'
import styles from './Product.module.css'
import { DataContext } from '../../context/DataProvider'
import { assets } from '../../assets/assets'
import { images } from '../../image/image'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import { addToCart } from '../../components/CartAPI'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const Product = () => {
  const [item, setItem] = useState({})

  const {productId} = useParams()
  const [products] = useContext(DataContext)
  const fetchProductData = async()=>{
    products.map((cur)=>{
      if (cur.id === productId){ 
        setItem(cur)
        return null
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
  }, [productId, products])

  const handleAddToCart = (product)=>{
    addToCart(product)  
  }
  
  return (
    <motion.div
      initial={{x: -100, opacity: 0}}
      animate={{x:0, opacity: 1}}
      transition={{
        duration: 0.2,
      }}
      exit={{x: 100, opacity: 0}}
      className={styles.product}
    >
      <BackTo />
      <div className={styles.productImage}>
        <img src={images[item.img]} alt='#'/>
      </div>
      
      <div className={styles.name}>
        <h2>{item.name}</h2>
        <h3 className='sub-accent-color'>{item.price}</h3>
      </div>
      <div className={styles.button_field}>
        <button 
          className={clsx(styles.add_cart_button, 'clickEffect')}
          onClick={()=>handleAddToCart(item)}
        >
          <img src={assets.add_cart_accent} className='icon' />
        </button>
        <button className={clsx(styles.buy_button, 'clickEffect')}>Mua hàng</button>
      </div>

      <div className={styles.detail}>
          <h2>Mô tả sản phẩm</h2>
          <p>{item.detail}</p>
      </div>
      <Footer />
    </motion.div>
  )
}

export default Product