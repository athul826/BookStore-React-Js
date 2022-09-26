import { AppBar, List, TextField, Toolbar } from "@mui/material";
import React from "react";
import educationbook from "../../Images/education.svg";
import "./Header.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


function Header(props) {

  const navigate = useNavigate();
    const cart = () => {
        navigate('/mycart')
    };

    const searching = (event) => {
      props.search(event.target.value)
  }

  return (
    <div className="Header_part">
      <AppBar className="appbar">
        <Toolbar style={{ backgroundColor: "#a03037" }}>
          <div className="bookimage">
            <img src={educationbook} alt=""></img>
          </div>
          <div className="bookstore_text">
            {" "}
            <h3>BookStore</h3>
          </div>

          <div className="main">
            <div className="search"  >
              <TextField
                className="searchtext_field"
                label="Search"
                onChange={searching}
                size="small"
              />
            </div>
            
            <List />
          </div>
          <div className="person" style={{width:50,marginLeft:420}} >
          < BsPerson  size="2rem" color='white'/>
            
             </div>
             <div className="cart_part" onClick={cart} style={{width:50,marginLeft:40}}>
               
               <AiOutlineShoppingCart size="2rem" color='white'/>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
