import React, { useEffect, useState } from "react";
import "./Cart.css";
import imageone from "../../Images/imageone.png";
import { Button } from "@mui/material";
import Header from "../../Components/Header/Header";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CustomerDetails from "../CustomerDetails/CustomerDetails";
import CartService from "../../Services/CartService";
import { useNavigate } from "react-router-dom";
import OrderService from "../../Services/OrderService";


const cartService = new CartService();
const orderService = new OrderService();

function Cart(props) {
  const navigate = useNavigate();
  const [orderSummery, setOrderSummery] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(false);
  const customerDetailsOpen = () => {
    setCustomerDetails(true);
  };

  const ordersummeryOpen = () => {
    setOrderSummery(true);
  };

  useEffect(() => {
    props.getcart();
  }, []);

  const increment = (props) => {
    let data = {
      id: props.arrayCart.id,
    };
    console.log("increment calling", data);
    cartService
      .incrementCartQuanitity(data)
      .then((res) => {
        console.log(res);
        props.getcart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decrement = (props) => {
    let data = {
      id: props.arrayCart.id,
    };

    cartService
      .decrementCartQuanitity(data)
      .then((res) => {
        console.log(res);
        props.getcart();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeCart = (props) => {
    console.log(props.arrayCart.id);
    let data = {
      id: props.arrayCart.id,
    };
    cartService
      .deleteBookFromCart(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkout = (props) => {
    console.log(props.id);
    let data = {
      address_id: 3,
      name: props.arrayCart.name,
      quantity: props.arrayCart.book_quantity,
    };
    orderService
      .placeOrder(data)
      .then((res) => {
        console.log(res);
        navigate("/ordersuccess");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="header_controller">
      <Header></Header>
      <div className="cartcontainer">
        <div className="cart-heading">
          <span className="mycartheading">Mycart 1</span>

          <div className="location">
            <LocationOnOutlinedIcon className="locationicon" />{" "}
            <button className="locationbutton">Use Current Location</button>
          </div>
        </div>

        {/* {cartArray.length >0 && cartArray.map((cart, index) =>(
                    <div key={index}> */}

        <div className="cartDetails">
          <img className="cartimage" src={imageone}></img>
          <div className="bookdetails">
            <span className="bookname"> {props.arrayCart.name} </span>
            <span className="author"> by{props.arrayCart.author}</span>
            <span className="rate"> Rs.{props.arrayCart.Price}</span>
          </div>
        </div>

        <div className="cartQuantity">
          <RemoveCircleOutlineRoundedIcon
            decrement
            onClick={() => decrement(props)}
            className="add"
          />
          <span className="cartnumber">{props.arrayCart.book_quantity}</span>
          <AddCircleOutlineRoundedIcon
            increment
            onClick={() => increment(props)}
            className="add"
          />

          <span onClick={() => removeCart(props)}> Remove </span>
        </div>
        {/* 
                    </div>
              ) )} */}

        <div className="placeorderbutton">
          <Button
            onClick={customerDetailsOpen}
            style={{
              width: "150px",
              height: "35px",
              backgroundColor: "#3371B5",
              color: "#FFFFFF",
              fontSize: "13px",
            }}
          >
            PLACE ORDER
          </Button>
        </div>
      </div>

      {customerDetails ? (
        <CustomerDetails />
      ) : (
        <div onClick={customerDetailsOpen} className="addressPlace">
          <span style={{ marginLeft: -600 }}>AddressDetails</span>
        </div>
      )}
      <div></div>
      {orderSummery ? (
        <div className="ordercontainer">
          <div>
            <span className="addressbuttons">Order Summary</span>
          </div>

          <div className="cartDetails">
            <img className="cartimage" src={imageone}></img>
            <div className="bookdetails">
              <span className="bookname">{props.arrayCart.name}</span>
              <span className="author">{props.arrayCart.author}</span>
              <span className="price"> {props.arrayCart.Price}</span>
            </div>
          </div>

          <div className="continuebutton" onClick={() => checkout(props)}>
            <Button
              className="continuebutton"
              style={{
                width: "150px",
                height: "35px",
                backgroundColor: "#3371B5",
                color: "#FFFFFF",
                fontSize: "14px",
                marginTop: "5px",
              }}
            >
              CHECKOUT
            </Button>
          </div>
        </div>
      ) : (
        <div onClick={ordersummeryOpen} className="orderPlace">
          <span style={{ marginLeft: -600 }}>OrderSummery</span>
        </div>
      )}
    </div>
  );
}

export default Cart;
