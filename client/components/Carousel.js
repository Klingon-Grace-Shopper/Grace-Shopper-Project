import React, { Component } from "react";
import Carousel from 'react-material-ui-carousel'
import { Link } from "react-router-dom"


const carouselImages = [
  {bookUrl:'/books/5', imageUrl: "https://imageproxy.viewbook.com/3d7171dd7f5d60583f1bb4a5be075847_hd.jpg?fit=max&dpr=1"},
  {bookUrl: '/books/2', imageUrl: "https://alecsoth.com/photography/media/pages/projects/songbook/995674301-1551319080/01-2012_05md1000_0525-bf-copy.jpg"},
  {bookUrl: '/books/21', imageUrl: "https://cdn.shopify.com/s/files/1/0035/7439/9040/files/Lead_Image.png?v=1636027427"},
 

]

export default class FeaturedCarousel extends Component {
  render() {
    return (
      <Carousel className='carousel'>
        {carouselImages.map((bookObj, i) => (<Link to={bookObj.bookUrl}> <img className='carouselImage' src={bookObj.imageUrl} key={i}/> </Link>
        ))}
      </Carousel>

    );
  }
}
