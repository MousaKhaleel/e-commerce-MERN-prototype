import logo from './logo.svg';
import './App.css';
import SetProduct from './components/SetProduct';
import UseFetch from './components/UseFetch';
import SetUser from './components/SetUser';
import earbuds from './assets/37-random-products-that-we-love_31.jpg';
import usb from './assets/SwiftRNG-cleanedup.jpg';
import charger from './assets/images (1).jpg';
import idk from './assets/images.jpg';
import './productStyle.css'
import { useEffect, useReducer, useState } from 'react';

function App() {

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
    <SetProduct price={price[product].price} color={price[product].color} pic={price[product].pic}/>
  ));

  return (
    <div className="App">
    <SetUser name={user.name} age={user.age} feild={user.feild} />
    <div className='main'>
    <SetProduct price={price[5]} color="blue" pic={earbuds} />
      <SetProduct price={price[19]} color="yellow" pic={usb} />
      <SetProduct price={price[33]} color="grey" pic={charger} />
      <SetProduct price={price[47]} color="red" pic={idk} />
    {/* {productComponents.length > 0 ? productComponents : <p>Loading...</p>} */}
    </div>
    </div>
  );
}

export default App;