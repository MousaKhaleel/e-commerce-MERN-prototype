import './productStyle.css'
import Product from './Product';
import useFetch from './useFetch';
import User from './User';
import earbuds from '../assets/37-random-products-that-we-love_31.jpg';
import usb from '../assets/SwiftRNG-cleanedup.jpg';
import charger from '../assets/images (1).jpg';
import idk from '../assets/images.jpg';
import { useEffect, useState } from 'react';

function HomePage() {
    const {data:user}=useFetch('getData')
    const {data:price}=useFetch('getPrice')
  console.log(price)

    return ( 
    <div>
        {user && <User name={user.name} age={user.age} feild={user.feild} />}
    <div className='main'>
    {/* {price &&
    price.map((item)=>{
        <Product price={item.price} color={item.color} pic={item.pic} />
    })
    } */}
    
     {price &&
        <Product price={price.p1.price} color="blue" pic={earbuds} />
    }
    {price &&
        <Product price={price.p2.price} color="yellow" pic={usb} />
    }
    {price &&
        <Product price={price.p3.price} color="grey" pic={charger} />
    }
    {price &&   
        <Product price={price.p4.price} color="red" pic={idk} />
    }
    </div>
        </div>
     );
}

export default HomePage;