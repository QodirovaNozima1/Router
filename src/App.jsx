import React from 'react';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from './pages/about/About'
import Login from './pages/login/Login'
import Error from './pages/notFound/notFound'

import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/Footer';

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
    </Routes>
    <Footer/>
    </>

  );
}

export default App;

