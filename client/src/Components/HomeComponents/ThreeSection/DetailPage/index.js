import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../../../Layouts/Footer'
import Navbar from '../../../../Layouts/Navbar'
import "./index.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Detailpage() {
    const {id} =useParams()
    const [data, setData] = useState([])

    useEffect(() => {
      
        axios.get(`http://localhost:1111/popular/${id}`).then((response) => {
            setData(response.data)
        })
    
    
    }, [])
  return (
    <HelmetProvider>
        <Helmet>
            <title>Detail Page</title>
        </Helmet>
    <Navbar/>
     <div className='alo'>
    <div className='header'>
        <p className='pi'>{data.heading}</p>
        <div className='ao'>
        <div className='date'>
            <i class="fa-regular fa-calendar-days"></i>
            <p>{data.date}</p>
        </div>
        <div className='comments'>
        <i class="fa-regular fa-comment"></i>
        <p>{data.comments}</p>
        </div>
        <div className='file'>
        <i class="fa-solid fa-folder-open"></i>
         <p>{data.file}</p>
        </div>
        </div>
    </div>
    <hr className='hr'/>
    <div className='sekilveyazi'>
        <div>
            <img src={data.imageUrl} />
        </div>
        <div className='go'>
            <p>{data.description}</p>
             <Link className='goe' to={`/`}><button className='buton'>Go back</button></Link>
        </div>
    </div>
    <hr className='hir'/>
</div>
<Footer/>
    </HelmetProvider>
   
  )
}

export default Detailpage