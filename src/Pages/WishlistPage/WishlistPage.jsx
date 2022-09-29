import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Wishlist from '../../Components/Wishlist/Wishlist';
import CartService from '../../Services/CartService';

const cartService = new CartService();

function WishlistPage(props) {
    const [wishlistArray, setWishlistArray] = useState([])

    useEffect(() => {
        getWishlist();
    }, [])
    const getWishlist = () => {
        console.log("Get All wishlist is calling")
        cartService.getAllBooksFromWishlist()
            .then((res) => {
                console.log(res.data);
                setWishlistArray(res.data.wishlist)
            }).catch((err) => {
                console.log(err);
            })
    }


return (
        <div>
            <Header/>

            {wishlistArray.length > 0 && wishlistArray.map((wishlist, index) => (
                <Wishlist key={index} wishlistArray ={wishlist} getwishlist={getWishlist} />
                
            ))}

        </div>
    );
}

export default WishlistPage;