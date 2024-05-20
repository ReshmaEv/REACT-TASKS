import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import Forms from './Hello';
import CounterApp from './counterApp'
import Fetch from './Fetch';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Layout from './component/Layout';
import Home from './component/Home';
import NoPage from './component/NoPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path="*" element={<NoPage />} />

    </Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
