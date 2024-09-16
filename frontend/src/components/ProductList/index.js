import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import {DataContext} from '../../context/DataProvider'
import ProductItem from '../ProductItem'
import styles from './ProductList.module.css'
import { assets } from '../../assets/assets'


const ProductList = () => {
  const [products] = useContext(DataContext)
  const nav = ['NỔI BẬT', 'SÁCH BỘ', 'VĂN HỌC', 'KINH TẾ', 'TÂM LÍ HỌC', 'TIỂU THUYẾT', 'KHOA HỌC']
  
  const containerRefs = useRef([]);

  useEffect(() => {
    const handleWheel = (e, index) => {
      e.preventDefault();
      const container = containerRefs.current[index];
      if (container) {
        const scrollSpeed = 5 //scrollSpeed giảm dần, lấy deltaY/scrollSpeed
        const maxScroll = container.scrollWidth - container.clientWidth;     //méo hiểu lắm
        container.scrollLeft = Math.max(Math.min(container.scrollLeft + e.deltaY/scrollSpeed, maxScroll), 0);
      }
    };

    // Add event listeners for each scrollable container
    containerRefs.current.forEach((ref, index) => {
      if (ref) {
        const wheelHandler = (e) => handleWheel(e, index);
        ref.addEventListener('wheel', wheelHandler, { passive: false });

        // Cleanup on unmount
        return () => {
          ref.removeEventListener('wheel', wheelHandler);
        };
      }
    });
  }); // Empty dependency array to ensure it runs once on mount

  return (
    <div className={styles.productContainer}>
      {nav.map((title, title_key) => {
        const list = products.filter(cur => cur.category.toLowerCase() === title.toLowerCase() || title === 'NỔI BẬT' && cur.isPopular)
        return (
          list.length !== 0 ? (
            <div key={title_key}>
              <div className={styles.title}>{title}</div>
              <div 
                className={styles.product_list} 
                ref={el => containerRefs.current[title_key] = el}
              >
                {
                  list.map((cur, index) => (
                    <ProductItem.List
                      key={index}
                      product={cur}
                    />)
                  )
                }
                <div className={styles.more_desktop}><Link><img src={assets.more_accent}/></Link></div>
              </div>
              <div className={styles.more_mobile}><Link>Xem thêm</Link></div>
            </div>
          ) : null
        )
      })}
    </div>
  )
}

export default ProductList