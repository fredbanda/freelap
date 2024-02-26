'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false)

    const showNavHandler = () => setShowNav(true)
    
  return (
    <div>
      <Navbar openNav={showNavHandler} />
    </div>
  )
}

export default ResponsiveNav