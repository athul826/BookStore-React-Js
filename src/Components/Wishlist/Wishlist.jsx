import React, { useEffect, useState } from 'react';
import "./Wishlist.css";
import imageone from "../../Images/imageone.png";
import Header from "../Header/Header";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CartService from '../../Services/CartService';

const cartService = new CartService();

function Wishlist(props) {

    const [wishlistArray, setwishlistArray] = useState([])



    useEffect(() => {
        getWishList();
    }, [])




    const getWishList = () => {
        cartService.getAllBooksFromWishlist()
            .then((res) => {
                console.log(res.data);
                setwishlistArray(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }

    const removeWishlist = (props) => {
        console.log(props.wishlistArray.id)
        let data = {

            'id': props.wishlistArray.id
        }
        cartService.deleteBookFromWishlist(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>

            <div className="wishlistContainer">


                <div className="secondSection-wishlist">
                    <div className="secondSection-myWishlist">My Wishlist</div>


                    <div className="secondSection-displayMyWishlist">
                        <div className="wishlistBookData">
                            <div className="wishListBookData-Image">
                                <img src={imageone} alt="" className="wishlist-bookImage" />
                            </div>
                            <div className="wishlistBookData-text">
                                <div className="wishlistBookData-text1">
                                    <div className="wishlistBook-title">{props.wishlistArray.name}</div>
                                    <div className="wishlistBook-author">by {props.wishlistArray.author}</div>
                                    <div className="wishlistBook-price">Rs. {props.wishlistArray.Price}</div>
                                </div>
                            </div>
                        </div>
                        <div className="wishlistBookDeleteIcon" onClick={() => removeWishlist(props)}>

                            <DeleteOutlineIcon

                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Wishlist;