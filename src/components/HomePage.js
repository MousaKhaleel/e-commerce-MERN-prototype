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
    // const [price1, setPrice] = useState({});
    // var price=JSON.stringify(useFetch('getPrice')).toString()
    // price=price.split('"')
    const {data:price}=useFetch('getPrice')
  console.log(price)
  
    // useEffect(()=>{
    //   fetch('http://localhost:8000/getPrice')
    //   .then(res => res.json())
    //   .then(data => setPrice(data))
    //   .catch(error => console.error(error))
    // },[])
  
    // const productComponents = Object.keys(price).map(product => (
    //   <Product price={price[product].price} color={price[product].color} pic={price[product].pic}/>
    // ));

    return ( 
    <div>
        {user && <User name={user.name} age={user.age} feild={user.feild} />}
    <div className='main'>
    {price &&
    price.map((item, i)=>{
        <Product key={i} price={item.price} color="blue" pic={earbuds} />
    })
    }
    {/*
     {price &&
        <Product price={price.p1.price} color="blue" pic={earbuds} />
    }
    {price &&
        <Product price={price[19]} color="yellow" pic={usb} />
    }
    {price &&
        <Product price={price[33]} color="grey" pic={charger} />
    }
    {price &&   
        <Product price={price[47]} color="red" pic={idk} />
    } */}
    {/* {productComponents.length > 0 ? productComponents : <p>Loading...</p>} */}
    </div>
        </div>
     );
}

export default HomePage;