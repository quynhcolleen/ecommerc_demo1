import React, {useState, useEffect, useContext} from 'react'
import BackTo from '../../components/BackTo'
import { getCartItems, addToCart, updateCartItem, removeFromCart, clearCart } from '../../components/CartAPI';
import { motion } from 'framer-motion';
import ProductItem from '../../components/ProductItem';
import styles from './Cart.module.css'
import { DataContext } from '../../context/DataProvider';

const Cart = () => {
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{
    const fetchCartItems = async()=>{
      const cartItems = await getCartItems()
      setCart(cartItems)
    }

    fetchCartItems()
  }, [])
  
  const handleAddToCart = async (product) => {
    const updatedCart = await addToCart(product);
    setCart(updatedCart);
  };

  const handleUpdateCart = async (productId, quantity) => {
    const updatedCart = await updateCartItem(productId, quantity);
    setCart(updatedCart);
  };

  const handleRemoveFromCart = async (productId) => {
    const updatedCart = await removeFromCart(productId);
    setCart(updatedCart);
  };

  const handleClearCart = async () => {
    const updatedCart = await clearCart();
    setCart(updatedCart);
  };
  return (
    <motion.div 
      className={styles.cart_page}
      initial={{y: 100, opacity: 0}}
      animate={{y:0, opacity: 1}}
      transition={{
        duration: 0.3,
      }}
      exit={{y: -100, opacity: 0}}
    >
      <BackTo />
      <div className={styles.cart_list} >
        {cart.map((cur, index)=>
          <ProductItem.Cart 
            key={index} 
            product={cur}
          />
        )}
      </div>
    </motion.div>
  )
}

export default Cart