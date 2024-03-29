import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Allproducts from './pages/Allproducts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Specificproduct from './pages/Specificproduct';
import socketIO from "socket.io-client"
import Store from './pages/Store.jsx'
import Basket from './pages/Basket';
import { StoreContextProvider } from './context/StoreContext';
import Build from './pages/Build';
import { Single } from './Single';
import Filter from './pages/Filter';
import Mousemat from './pages/Mousemat';
import Keyboards from './pages/Keyboards';
import Accessories from './pages/Accessories';
import Upload from './pages/Upload';
import Community from './pages/Community';
import Upload2 from './pages/Upload2';
import Blog from './pages/Blog';
import Stripe2 from './stripe';
import PayStripe from './pages/PayStripe';
import Article from './pages/Article';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';
import Article5 from './pages/Article5'
import Article6 from './pages/Article6'

function App() {
  


  return (
<div>
  <StoreContextProvider>
<BrowserRouter>
<Routes>
      
<Route path='/' element = {<Layout/>}>  
<Route path='login' element = {<Login/>}/>
      <Route path='signup' element = {<Signup/>}/>
<Route index element ={<Home />} />
      <Route path ="about" element = {<About />}/>
      <Route path ="contact" element = {<Contact />}/>
      <Route path ="checkout" element = {<Checkout />}/>
      <Route path='allproducts' element = {<Allproducts/> }/>
     
      <Route path='Basket' element = {<Basket />}/>
      <Route path ="Store" element = {<Store />} />
      <Route path='BuildProcess' element = {<Build/>} />
      <Route path='Test2' element = {<Single />} />
      <Route path="Specificproduct/:id" element = {<Specificproduct/>}/>
      <Route path="Specificproduct/:type" element = {<Specificproduct/>}/>
      <Route path="Filter/:type" element = {<Filter/>}/>
      <Route path ="Store/:type" element = {<Store />} />
      <Route path ="Keyboards:type" element = {<Keyboards />} />
      <Route path ="Mousemat:type" element = {<Mousemat />} />
      <Route path ="Accessories:type" element = {<Accessories />} />
      <Route path ="upload" element = {<Upload />} />
      <Route path ="upload2" element = {<Upload2 />} />
      <Route path='blog' element = {<Blog/>} />

      <Route path ="Community" element = {<Community />} />
      <Route path = "payment" element = {<Stripe2 />} />
      <Route path ="securepayment" element = {<PayStripe />} />
      <Route path ="Article" element = {<Article />} />
      <Route path ="Article1" element = {<Article1 />} />
      <Route path ="Article2" element = {<Article2 />} />
      <Route path ="Article3" element = {<Article3 />} />
      <Route path ="Article4" element = {<Article4 />} />
      <Route path ="Article5" element = {<Article5 />} />
      <Route path ="Article6" element = {<Article6 />} />






    
      
     </Route>
</Routes>
</BrowserRouter>
</StoreContextProvider>
</div>
  );
}

export default App;
