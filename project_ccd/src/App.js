//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/product-list';
import db from './database';

function App() {
  return (
    <div className="App">
      

      <Header />
      <Home />
      <ProductList>products ={db.products}</ProductList>
      
    </div>
  );
}

export default App;
