import './productStyle.css'
import Product from './Product';
import UseFetch from './UseFetch';
import User from './User';
import earbuds from '../assets/37-random-products-that-we-love_31.jpg';
import usb from '../assets/SwiftRNG-cleanedup.jpg';
import charger from '../assets/images (1).jpg';
import idk from '../assets/images.jpg';
import { useEffect, useState } from 'react';

function HomePage() {
    const [user, setUser] = useState({});
    const [price1, setPrice] = useState({});
    var price=JSON.stringify(UseFetch('getPrice')).toString()
    price=price.split('"')
  
    useEffect(() => {
      fetch('http://localhost:8000/getData')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(error => console.error(error))
    }, []);
  
  
    useEffect(()=>{
      fetch('http://localhost:8000/getPrice')
      .then(res => res.json())
      .then(data => setPrice(data))
      .catch(error => console.error(error))
    },[])
  
    const productComponents = Object.keys(price).map(product => (
      <Product price={price[product].price} color={price[product].color} pic={price[product].pic}/>
    ));

    return ( 
    <div>
        <User name={user.name} age={user.age} feild={user.feild} />
    <div className='main'>
        <Product price={price[5]} color="blue" pic={earbuds} />
        <Product price={price[19]} color="yellow" pic={usb} />
        <Product price={price[33]} color="grey" pic={charger} />
        <Product price={price[47]} color="red" pic={idk} />
    {/* {productComponents.length > 0 ? productComponents : <p>Loading...</p>} */}
    </div>
        </div>
     );
}

export default HomePage;