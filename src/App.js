import logo from './logo.svg';
import './App.css';
import SetProduct from './components/SetProduct';

// fetch('http://localhost:8000/getData')
// .then(res => res.json())
// .then(data => setData(data))
// .catch(error => console.error(error));

fetch('http://localhost:8000/getPrice')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));

function App() {
  return (
    <div className="App">
    <div>
      <SetProduct price={setData} />
    </div>
    {/* 3 p with the data  one getdata me get price give four boces with prices each color*/}
    </div>
  );
}

export default App;
