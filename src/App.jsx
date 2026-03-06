import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login'
import Signin from './pages/SignInPage/SignIn'
import Cart from './pages/CartPage/Cart'
import Checkout from './pages/CheckoutPage/Checkout'
import FoodDetail from './pages/FoodDetailPage/FoodDetail'
import Myorder from './pages/MyOrderPage/MyOrder'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/fooddetail/:id" element={<FoodDetail />}></Route>
        <Route path="/myorder" element={<Myorder />}></Route>
      </Routes>
    </>
  )
}

export default App
