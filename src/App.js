import logo from './logo.svg';
import './App.css';
import SetProduct from './components/SetProduct';
import FetchData from './components/FetchData';
import SetUser from './components/SetUser';
import earbuds from './assets/37-random-products-that-we-love_31.jpg';
import usb from './assets/SwiftRNG-cleanedup.jpg';
import charger from './assets/images (1).jpg';
import idk from './assets/images.jpg';
import productStyle from './productStyle.css'

function App() {
  var price=FetchData('getPrice').toString()
  price=price.split('"')

  var user=FetchData('getData').toString()
  user=user.split('"')
  return (
    <div className="App">
    <SetUser name={user[3]} age={user[7]} feild={user[11]} />
    <div className='main'>
      <SetProduct price={price[5]} color="blue" pic={earbuds} />
      <SetProduct price={price[11]} color="yellow" pic={usb} />
      <SetProduct price={price[17]} color="grey" pic={charger} />
      <SetProduct price={price[23]} color="red" pic={idk} />
    </div>
    </div>
  );
}

export default App;
