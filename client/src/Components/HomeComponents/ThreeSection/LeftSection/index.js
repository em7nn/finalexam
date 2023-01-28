import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.scss"
import { Link } from 'react-router-dom'
function LeftSection() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
      
        axios.get("http://localhost:1111/popular").then((response) => {
            setData(response.data)
        })
    
    
    }, [])
    
  

    return (
        <>
            <div className='leftsection_main'>
                <div className='leftsection_search'>
                    <input type={"text"} placeholder="search from here" onChange={(e) => { setSearch(e.target.value) }} />
                </div>
                <div className='cards'>
                    {
                        data.filter((popular) =>
                            popular.heading.toLowerCase().includes(search.toLowerCase())).map((element, index) => {
                                return (
                                    <>
                                        <div className='populars' key={index}>
                                            <div className='header'>
                                                <p className='pi'>{element.heading}</p>
                                                <div className='ao'>
                                                <div className='date'>
                                                    <i class="fa-regular fa-calendar-days"></i>
                                                    <p>{element.date}</p>
                                                </div>
                                                <div className='comments'>
                                                <i class="fa-regular fa-comment"></i>
                                                <p>{element.comments}</p>
                                                </div>
                                                <div className='file'>
                                                <i class="fa-solid fa-folder-open"></i>
                                                 <p>{element.file}</p>
                                                </div>
                                                </div>
                                            </div>
                                            <hr className='hr'/>
                                            <div className='sekilveyazi'>
                                                <div>
                                                    <img src={element.imageUrl} />
                                                </div>
                                                <div className='go'>
                                                    <p>{element.description}</p>
                                                     <Link className='goe' to={`/details/${element._id}`}><button className='buton'>Continue reading <i class="fa-solid fa-chevron-right"></i></button></Link>
                                                </div>
                                            </div>
                                            <hr className='hir'/>
                                        </div>
                                    </>
                                )
                            })
                    }
                </div>
                <div className='aaa'><Link className='a' to="/samdamdamd"><button className='aa'>Older posts</button></Link></div>
            </div>
        </>
    )
}

export default LeftSection