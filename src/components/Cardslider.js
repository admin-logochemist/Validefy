import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/cardslider.css'
import img_one from '../images/bitcoin.png'
import img_two from '../images/ethereum.png'
import img_three from '../images/tether.png'
import img_four from '../images/binance-coin.png'
import img_five from '../images/usd-coin.png'
import img_six from '../images/ripple.png'
import img_seven from '../images/cardano.png'
import img_eight from '../images/solana.png'
import img_night from '../images/terra.png'
import img_ten from '../images/avalanche.png'
import img_chart from '../images/graph.84e97057.svg'
// import 
// import bit_coin from ''
// import './App.css';

class cardslider extends Component {
  render() {
    const settings = {
      stagePadding: 0,
      margin: 0,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 3,
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 3,
          }
        },
        {
          breakpoint: 501,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 3,
          }
        },
    ]
    };
        const arrayOfObjects = [
            { 
              chart: img_chart,
              img_path: img_one,
              name:"Bit coin",
              img_chart: img_chart,
              abbreviation: "BTC",
              price: "$ 39139.13",
              percantage: "2.04%",
            },
            { 
              chart: img_chart,
                img_path: img_two,
                name:"Ethereum",
                img_chart: img_chart,
                abbreviation: "ETH",
                price: "$ 2713.07",
                percantage: "2.49%",
            },
            { 
              chart: img_chart,
                img_path: img_three,
                name:"Tether",
                img_chart: img_chart,
                abbreviation: "USDT",
                price: "$ 1.00",
                percantage: "-0.16%",
            },
            { 
              chart: img_chart,
                img_path: img_four,
                name:"Binance Coin",
                img_chart: img_chart,
                abbreviation: "BNB",
                price: "$ 0.999189",
                percantage: "-0.03%",
            },
            { 
              chart: img_chart,
                img_path: img_five,
                name:"USD Coin",
                img_chart: img_chart,
                abbreviation: "USDC",
                price: "$ 0.999189",
                percantage: "-0.03%",
            },
            {  chart: img_chart,
                img_path: img_six,
                name:"XRP",
                img_chart: img_chart,
                abbreviation: "XRP",
                price: "$ 0.736543",
                percantage: "4.83%",
            },
            {  chart: img_chart,
                img_path: img_seven,
                name:"Cardano",
                img_chart: img_chart,
                abbreviation: "ADA",
                price: "$ 0.883565",
                percantage: "2.92%",
            },
            { 
              chart: img_chart,
                img_path: img_eight,
                name:"Solana",
                img_chart: img_chart,
                abbreviation: "SOL",
                price: "$ 91.64",
                percantage: "2.78%",
            },
            { 
              chart: img_chart,
                img_path: img_night,
                name:"Terra",
                img_chart: img_chart,
                abbreviation: "LUNA",
                price: "$ 69.20",
                percantage: "10.75%",
            },
            { 
              chart: img_chart,
                img_path: img_ten,
                name:"Avalanche",
                img_chart: img_chart,
                abbreviation: "AVAX",
                price: "$ 78.26",
                percantage: "3.32%",
            },
            
     ]
     
    return (
      <div className="containerr">
          <h3>Top Trading Currency</h3>
        <Slider {...settings}>
        {arrayOfObjects.map((post) => (
          <div className='card_slider'>
             <img src={post.img_path}/>
             <span>{post.name}</span>
             <div className='chart_bar'><img src={img_chart} className="chart_bar_img"/></div>
             <h3>{post.abbreviation}</h3>
             <price>{post.price}</price>
             <percantage>{post.percantage}</percantage>
          </div>
          
        ))}
        </Slider>
      </div>
    );
  }
}

export default cardslider;
