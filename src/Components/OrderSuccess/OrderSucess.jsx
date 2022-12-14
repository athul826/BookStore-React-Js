import React from "react";
import "./OrderSucess.css";
import orderimg from "../../Images/Orderplace.png";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function OrderSucess(props) {
  return (
    <div className="orderSuccess-container">
      <Header />
      <div className="orderSuccess-image">
        <img src={orderimg} alt="" className="orderSuccess-image-img" />
      </div>
      <div className="orderSuccess-text">
        <p className="orderSuccess-textData">
          <span className="text-firstline">
            hurray!!! your order is confirmed
          </span>
          <br />
          <span className="text-second">
            {" "}
            the order id is #123456 save the order id for{" "}
          </span>
          <br />
          <span className="text-thirdline">further communication..</span>
        </p>
      </div>
      <div className="table">
        <div className="column-name">
          <div className="first-column">Email us</div>
          <div className="second-column">Contact us</div>
          <div className="third-column">Address</div>
        </div>
        <div className="column-data">
          <div className="first-column-data">admin@bookstore.com</div>
          <div className="second-column-data">
            <p className="mobileNumber">+91 8163475881</p>
          </div>
          <div className="third-column-data">
            <p className="address">
              42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
              Kumarakom restaurant, HSR Layout, Bangalore 560034
            </p>
          </div>
        </div>
      </div>

      <div className="continueShopping">
        <Link to="/Home">
          <Button variant="contained" className="continueShopping-btn">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSucess;
