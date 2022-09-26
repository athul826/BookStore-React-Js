import React from "react";
import "./GetBookId.css";
import imageone from "../../Images/imageone.png";
//import AiOutlineStar from '@mui/icons-material/StarOutline';
import { Button } from "@mui/material";
import Header from "../Header/Header";
import { AiOutlineStar } from "react-icons/ai";
import CartService from "../../Services/CartService";

const cartService = new CartService();
function GetBookId(props) {
  const addToCart = (props) => {
    console.log(props);
    let data = {
      book_id: props.bookdata.id,
    };
    console.log("AddToCart is Calling");
    console.log(data);
    cartService
      .addBookToCart(data)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header></Header>
      <div className="maincontainer" style={{ marginTop: 140 }}>
        <div className="descriptionContainer">
          <div className="BookDetail_sizepart">
            <div className="Book_size">
              <div className="BookImage">
                <img src={imageone} alt="" className="BookImg" />
              </div>
            </div>
            <div className="BookBottom_part">
              <input
                onClick={() => addToCart(props)}
                type="button"
                value="ADD TO BAG"
                className="Add_bag"
              />
              <input type="button" value="WISHLIST" className="wishlist_part" />
            </div>
          </div>

          <div className="BookDetail_right">
            <div className="BookDetail-2">
              <div className="name_part"> {props.bookdata.name} </div>
              <div className="autor_part"> {props.bookdata.author} </div>

              <div className="rating">
                <div>4.5 </div>
                <AiOutlineStar className="child1-starIcon" />
              </div>
              <div className="rupees">RS.{props.bookdata.price}</div>
            </div>

            <div className="rightSection-BookDetail-part">
              <div className="bookDetail_part">Book Detail</div>

              <div className="Description_part">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna.
              </div>
            </div>

            <div className="rightSection-BookDetail-child3">
              <div className="Feedback_part">Customer Feedback</div>
              <div className="feedback_details">
                <div className="Rating_part">Overall rating</div>
                <div className="star-icons">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <div className="feedback_box">
                  <input type="text" className="feedback_box_part" />
                </div>
                <div className="submit_part">
                  <Button variant="contained" className="submit_button">
                    submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GetBookId;
