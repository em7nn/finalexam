import React from 'react'
import Addpag from '../../Components/AddPageComponents'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function AddPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Add Page
        </title>
      </Helmet>
    <Navbar/>
    <Addpag/>
    <Footer/>
    </HelmetProvider>
  )
}

export default AddPage