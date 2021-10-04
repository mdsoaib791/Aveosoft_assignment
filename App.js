import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Productlist from './component/Productlist'
function App() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await fetch('https://aveosoft-react-assignment.herokuapp.com/products');
    setProduct(await response.json());
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="App">
      <h1>Product List </h1>
      <div className="product-category">
      <lable className="p-2 pr">Product Categogy</lable>
      <select className="select-category">
        <option >laptop</option>
        <option >mobile</option>
      </select>
      </div>
      <div className="product-item">
        {
          product.map((curElement) => {
            return <Productlist soaib={curElement} />
          })
        }
      </div>
    </div>
  );
}

export default App;
