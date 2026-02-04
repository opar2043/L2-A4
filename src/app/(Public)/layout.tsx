import Footer from '@/components/Layouts/Footer'
import { Navbar1 } from '@/components/Layouts/Navbar'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import React from 'react'

const publiclayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
          <Navbar1 />
          {children}
          <Footer />
    </div>
  )
}

export default publiclayout