import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import store from '../../store/store'

const Layout = ({ children }) => {
  const { loading, apiMain } = store();

  // useEffect(() => {
  //   apiMain();
  // },[])


  return ( 
    <>
      <Header/>
      {/* {
        loading ? <main><h2 className='loading'>Loading...</h2></main> :  */}
        <main>
          {children}
        </main>
       {/* } */}
      <Footer/>
    </>
  )
}

export default Layout