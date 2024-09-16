import React from 'react'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = ({children}) => {
  return (
    <AnimatePresence>
        {children}
    </AnimatePresence>
  )
}

export default AnimatedRoutes