import React from 'react'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getCartItems } from '../components/CartAPI'

export const DataContext = createContext()

const DataProvider = ({children}) => {
  
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [accounts, setAccounts] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/product")
      .then(res=>res.json())
      .then(data=>{
        setProducts(data);
      })
  },[])

  // useEffect(()=>{
  //   fetchAccount()
  // }, [])

  // const fetchAccount = async() =>{
  //   const res = await axios.get('http://localhost:8000/acount');
  //   setAccounts(res.data)
  // }

  useEffect(()=>{
    const fetchCart = async()=>{
      const response = await getCartItems()
      setCartItems(response.data)
    }
    
    fetchCart()
  }, [])
  
  
  return (
    <DataContext.Provider value={[products, accounts, cartItems]}>
      {children}
    </DataContext.Provider>
  )
}


export default DataProvider