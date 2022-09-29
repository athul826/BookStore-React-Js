import { AppBar, List, Menu, MenuItem, TextField, Toolbar } from "@mui/material";
import React, { useState } from "react";
import educationbook from "../../Images/education.svg";
import "./Header.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header(props) {

  const navigate = useNavigate();
    const cart = () => {
        navigate('/mycart')
    };

    const searching = (event) => {
      props.search(event.target.value)
  }

  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const goToWishlist = () => {
      navigate('/wishlist')
  }

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
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
                //  label="Search"
                placeholder="Search"
                onChange={searching}
                size="small"
              />
            </div>
            
            <List />
          </div>
          <div className="person" style={{width:50,marginLeft:375}} >
          < BsPerson  size="2rem" color='white'/>
            
             {/* </div>
             <div className="person">
                    <BsPerson size="2rem" style={{ color: '#FFFFFF' }} /> */}
                    <span
                        className="profile-name"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >athul</span>
                    <Menu
                        id="basic-menu"

                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        <MenuItem onClick={goToWishlist}>
                            <FavoriteIcon>
                            </FavoriteIcon>
                            <span className='MyWishlist'>My Wishlist</span>
                        </MenuItem>
                        <MenuItem className='Logout'>
                            <span onClick={logout} className='Logout'>Logout</span>
                        </MenuItem>

                    </Menu>
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
