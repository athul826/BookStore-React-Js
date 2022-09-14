import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import DisplayBooks from './Components/Books/DisplayBooks';
//import DisplayBooks from './Components/Books/DisplayBooks';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import DashBoard from './Pages/DashBoard/DashBoard';
//import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
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
      </Routes>
      </BrowserRouter>
     
      {/* <HomePage/> */}
      
    </div>
  );
}
export default App;
