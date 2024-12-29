import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Login from './pages/login'
import Header from './component/header'
import ProductDetail from './pages/productDetail'

const MyRoute = () => {
  return (
    <div className="pages">
      <div className="one2">
        <Header />
      </div>
      <div className="one1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<ProductDetail />} />

        </Routes>
        </div>
    </div>
  )
}

export default MyRoute