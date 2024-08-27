import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">

      <div className="home__container">
        <img
        className="home__image"
        src="https://c4.wallpaperflare.com/wallpaper/884/509/243/landscape-dark-nature-wallpaper-preview.jpg"
        alt="background"/>

      <div className="home__row">
        <Product id={2211861} title= 'The lean startup' price= {19.99} image='https://images-na.ssl-images-amazon.com/images/I/81LCt0MCm3L.jpg' rating={3} />
        <Product id={355217} title='bts unique utensils' price={45.33} image='https://ph-test-11.slatic.net/p/9524e1947210a3f1daf047e90ee5edc3.jpg' rating={5}/>
        
      
      </div>  
      <div className="home__row">
       <Product id={667422} title= 'The cute cup' price= {60.99} image='https://cdn.shopify.com/s/files/1/2491/1072/products/71b0XZKajXL._SL1500__1_480x480.jpg?v=1640082899' rating={5}/>
       <Product id={5652135} title= 'The soft and squishy bagpack' price= {85.99} image='https://images.meesho.com/images/products/111832164/g3pk4_512.jpg' rating={5}/>
       <Product  id={5764357} title= 'crystal butterfly frame' price= {25.99} image='https://thumbs.dreamstime.com/b/glowing-frame-butterflies-flowers-transparent-floral-ornament-68180126.jpg' rating={4}/>
      
      </div>  
      <div className="home__row">
       <Product  id={65345678} title= 'beautiful picture of unicorn' price= {48.99} image='https://wallpapercave.com/wp/2gS09fx.jpg' rating={4} />
      </div>
      </div>
    </div>
  )
}

export default Home