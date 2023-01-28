import React from 'react'
import "./index.scss"
function RightSection() {
    return (
        <>
            <div className='rightsection_main'>
                <div className='rightsection'>
                    <div className='yuxardaki'>
                        <p>POPULAR</p>
                        <p style={{ color: "green" }}>RECENT</p>
                        <p style={{ color: "green" }}><i class="fa-solid fa-comments"></i></p>
                    </div>
                    <div className='asagidaki'>
                        <div className='caro'>
                            <div className='imige'>
                                <img src='https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/54-60x60.jpg' />
                            </div>
                            <div className='ad'>
                                <p className='piu'>Template: Sticky</p>
                                <p>Jan 7, 2015</p>
                            </div>
                        </div>
                        <div className='caro'>
                            <div className='imige'>
                                <img src='https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/2048-4-60x60.jpg' />
                            </div>
                            <div className='ad'>
                                <p className='piu'>Bullet Point Test</p>
                                <p>Jan 7, 2015</p>
                            </div>
                        </div>
                        <div className='caro'>
                            <div className='imige'>
                                <img src='https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02-60x60.jpg' />
                            </div>
                            <div className='ad'>
                                <p className='piu'>Markup: Title With Special Characters</p>
                                <p>Jan 7, 2015</p>
                            </div>
                        </div>
                        <div className='caro'>
                            <div className='imige'>
                                <img src='https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/2048-1-60x60.jpg' />
                            </div>
                            <div className='ad'>
                                <p className='piu'>Hello world!</p>
                                <p>Jan 7, 2015</p>
                            </div>
                        </div>
                        <div className='caro'>
                            <div className='imige'>
                                <img src='https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03-60x60.jpg' />
                            </div>
                            <div className='ad'>
                                <p className='piu'>Markup: HTML Tags and Formatting</p>
                                <p>Jan 7, 2015</p>
                            </div>
                        </div>
                    </div>
                    <h3>Recent Comments</h3>
                    <hr className='hiro' />
                    <div className='lapasagidaki'>
                        <div className='aw'>
                            <i class="fa-regular fa-comment"></i>
                            <p>hhhh on <a href='#'>Hello world!</a></p>
                        </div>
                        <div className='aw'>
                            <i class="fa-regular fa-comment"></i>
                            <p>Stefanos on <a href='#'>Bullet Point Test</a></p>
                        </div>
                        <div className='aw'>
                            <i class="fa-regular fa-comment"></i>
                            <p>mimi on<a href='#'>Gallery</a></p>
                        </div>
                        <div className='aw'>
                            <i class="fa-regular fa-comment"></i>
                            <p>Finn on <a href='#'>Page with comments</a></p>
                        </div>
                        <div className='aw'>
                            <i class="fa-regular fa-comment"></i>
                            <p>gargi on<a href='#'>Page with comments</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSection