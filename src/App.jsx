import React from 'react';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About'
import Login from './pages/login/Login'
import Error from './pages/notFound/notFound'
import Product from './components/products/Product';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Detail from './pages/detail/Detail';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/*' element={<Error/>}/>
      <Route path='/product/:id' element={<Detail/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;

