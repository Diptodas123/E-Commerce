import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './Context/ProductContext';
import { FilterContextProvider } from './Context/FilterContext';
import { CartContextProvider } from './Context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { TopLoaderProvider } from './Context/TopLoaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProductProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <TopLoaderProvider>
            <App />
          </TopLoaderProvider>
        </CartContextProvider>
      </FilterContextProvider>
    </ProductProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
