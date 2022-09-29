import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Cart from './Components/Cart/Cart';
import CustomerDetails from './Components/CustomerDetails/CustomerDetails';
//import DisplayBooks from './Components/Books/DisplayBooks';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import GetBookId from './Components/GetBookId/GetBookId';
import OrderSucess from './Components/OrderSuccess/OrderSucess';
import Wishlist from './Components/Wishlist/Wishlist';
// import OrderSummery from './Components/OrderSummery/OrderSummery';
import CartPage from './Pages/CartPage/CartPage';
import DashBoard from './Pages/DashBoard/DashBoard';
//import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
// import SignUp from './Components/SignUp/SignUp';
// import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<HomePage /> } /> 
        <Route path = '/dashboard' element = {<DashBoard /> } />
        <Route path = '/forgotpassword' element = {<ForgetPassword/> } />
        
        {/* <Route path = '/displaybooks' element = {<DisplayBooks/> } /> */}
        <Route path = '/getBookById' element = {<GetBookId/> } />
        <Route path = '/mycart' element = {<CartPage/> } />
        <Route path = '/customerdetails' element = {<CustomerDetails/> } />
        <Route path = '/ordersuccess' element = {<OrderSucess/> } />
        {/* <Route path = '/ordersummery' element = {<OrderSummery/> } /> */}
        <Route path = '/wishlist' element = {<WishlistPage/> } />
      </Routes>
      </BrowserRouter>
     
      {/* <HomePage/> */}
      
    </div>
  );
}
export default App;
