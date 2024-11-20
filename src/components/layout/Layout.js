import React, { Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import Loading from '../Loading'
import TopBtn from './TopBtn'

const Layout = ({ children }) => {

  return ( 
    <>
      <Header/>
      <Suspense fallback={ <Loading /> }>
        <main>
          {children}
        </main>
      </Suspense>
      <TopBtn />
      <Footer/>
    </>
  )
}

export default Layout