import React, { useEffect, useState } from 'react';
// import React, { useEffect, useState } from 'react';
import Cart from '../../Components/Cart/Cart';
// import Header from "../Header/Header";
import CartService from '../../Services/CartService';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';


const cartService = new CartService();

function CartPage(props) {

    const [cartArray, setcartArray] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getCartList();
      }, [])

    //   const goToDashBoard = () => {
    //     navigate('/dashboard')
    // }
    
      const getCartList = () => {
        cartService.getAllBooksFromCart()
          .then((res) => {
            console.log(res.data);
            setcartArray(res.data.Cart)
          }).catch((err) => {
            console.log(err);
          })
      }

    return (
        <div>
          <Header/>
          {/* <span onClick={goToDashBoard} className='homecart'>Home / Cart</span> */}
          
            {cartArray.length > 0 && cartArray.map((cart, index) => (
              <Cart key={index} arrayCart={cart} getcart={getCartList} />
    
            ))}
    
            {/* <Mycart /> */}
         
    
    
        </div>
      );
    }

export default CartPage;