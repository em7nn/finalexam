import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.scss"
function FirstSection() {
  return (
    <Carousel className='carousel' showThumbs={false}>
      <div className='wro'>
        <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/homev_updated1_02.jpg" />
        <div className='re'>
        <p >Markup: Title With Special Characters</p>
        <p className='pe'>Markup: Title With Special Characters ~`!@#$%^&*()-_=+{ }[]/;:’”?,. Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the post title have been known to cause issues with JavaScript when it is minified, especially in the admin when editing the post itself ie. issues with metaboxes, media upload, […]</p>
        </div>
      </div>
      <div className='wro'>
        <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03.jpg" />
        <div className='re'>
        <p>Markup: HTML Tags and Formatting</p>
        <p className='pe'>Headings Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying yes to the thing you`ve got to focus on. But that`s not what it means at all. It means saying no to […]</p>
        </div>
        
      </div>
      <div className='wro'>
        <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide02.jpg" />
        <div className='re'>
        <p>Markup: Image Alignment</p>
        <p className='pe'>Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let`s get started.</p>
        </div>

      </div>
    </Carousel>
  )
}

export default FirstSection