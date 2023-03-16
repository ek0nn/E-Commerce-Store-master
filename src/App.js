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
import Profile from './support/Profile';
import Support from './support/Support';
import CE from './support/CE';
import { Single } from './Single';
function App() {
  


  return (
<div>
  <StoreContextProvider>
<BrowserRouter>
<Routes>
      <Route path='login' element = {<Login/>}/>
      <Route path='signup' element = {<Signup/>}/>
      <Route path='support/CE' element ={<CE />} />
<Route path='/' element = {<Layout/>}>  
<Route index element ={<Home />} />
      <Route path ="about" element = {<About />}/>
      <Route path ="contact" element = {<Contact />}/>
      <Route path ="checkout" element = {<Checkout />}/>
      <Route path='allproducts' element = {<Allproducts/> }/>
     
      <Route path='Basket' element = {<Basket />}/>
      <Route path ="Store" element = {<Store />} />
      <Route path='BuildProcess' element = {<Build/>} />
      <Route path='Support' element = {<Support />} />
      <Route path='Test2' element = {<Single />} />
      <Route path="Specificproduct/:id" element = {<Specificproduct/>}/>

    
      
     </Route>
</Routes>
</BrowserRouter>
</StoreContextProvider>
</div>
  );
}

export default App;
