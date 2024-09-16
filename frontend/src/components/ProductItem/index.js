import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../image/image'
import styles from './ProductItem.module.css'
import {assets} from '../../assets/assets'
import Product from '../../pages/Product'
import { addToCart, removeFromCart } from '../CartAPI'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const ProductItem = {
    List({ product}){
        const handleAddToCart = (product)=>{
            addToCart(product)
            setDisplay(true)
            setTimeout(()=>{
                setDisplay(false)
            }, 1000) //sau 1 giây tự xóa hiệu ứng +1
        }
        const [display, setDisplay] = useState(false)   //hiệu ứng +1

        return (
            //Product Item in list
            <motion.div className={clsx(styles.productItems)}>
                <Link to={`/product/${product.id}`} element={<Product id={product.id}/>}  >
                    <div>
                        <div className='d-flex-center'><img src={[images[product.img]]} className={styles.product_img}/></div>
                        <div className={styles.info}>
                            <div><h2 className={styles.name}>{product.name}</h2></div>
                            <div><h2 className={styles.price}>{product.price}</h2></div>
                        </div>
                    </div>
                </Link>
                    <img src={assets.add_cart_accent} 
                    onClick={()=>handleAddToCart(product)}
                    className={clsx(styles.add_cart_mobile, 'clickEffect')}/>
                    <div 
                        className={styles.add_cart_desktop}
                        onClick={()=>handleAddToCart(product)}
                    >Thêm vào giỏ</div>

                    {/* {display && <motion.div 
                        initial={{x: '150px',  y: 0, opacity: 0}}
                        animate={{x: '150px', y: '-60px', opacity: 100}}
                        exit={{x:'150px', y: '-100px', opacity: 0}}
                        className={styles.addEffect}
                    >+1
                    </motion.div>} */}
            </motion.div>
        )
    },
    Search( {product}){
        return (
            <Link to={`/product/${product.id}`} element={<Product id={product.id}/>} className={clsx(styles.Item)}> 
                <div  className={styles.productItem_search}>
                    <img src={[images[product.img]]} />
                    <div className={styles.info}>
                        <h2 className={styles.name}>{product.name}</h2>
                        <h2 className={styles.price}>{product.price}</h2>
                    </div>
                </div>
            </Link>
        )
    },
    Cart( {product} ){
        const [inCart, setInCart] = useState(true)
        const handleRemoveFromCart = (productId) =>{
            removeFromCart(productId)
            setInCart(false)
        }
        return (
            <>
            {inCart && <motion.div 
                className='pos_relative'>
                <Link to={`/product/${product.id}`} element={<Product id={product.id}/>}> 
                    <div  className={styles.productItem_cart}>
                        <img src={[images[product.img]]} />
                        <div className={styles.info}>
                            <h2 className={styles.name}>{product.name}</h2>
                            <h2 className={styles.price}>{product.price}</h2>
                            <strong className={styles.date}>Ngày thêm: {product.date}</strong>
                            <strong className={styles.quantity}>Số lượng: {product.quantity}</strong>
                        </div>
                    </div>
                </Link>
                <img 
                    src={assets.multiply_icon} style={{width: '30px', height: '30px', position: 'absolute', right: '20px', top: 0}}
                    onClick={()=> handleRemoveFromCart(product.id)}
                />
            </motion.div>
            
            }
            </>
        )
    }
}

export default ProductItem