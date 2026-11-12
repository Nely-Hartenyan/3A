import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import {useState} from "react";

function App() {
  const [cart,setCart] = useState([])

  const addToCart = (item) => {
    setCart((prev) => [...prev, item])
  }

  return (
    <>
      <Header cartLength={cart.length}/>
      <Hero />
      <ProductList onAddToCart={addToCart}/>
      <Footer/>
   </>
  )
}

export default App
