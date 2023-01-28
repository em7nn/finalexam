import React from 'react'
import HomeComponents from '../../Components/HomeComponents'
import Footer from '../../Layouts/Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from '../../Layouts/Navbar'

function HomePage() {
  return (
   <HelmetProvider>
   <Helmet>
    <title>Home Page</title>
   </Helmet>
   <Navbar/>
   <HomeComponents/>
  <Footer/>
   </HelmetProvider>
  )
}

export default HomePage