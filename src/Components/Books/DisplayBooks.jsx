import React from "react";
import "./DisplayBooks.css";
//import Header from "../Header/Header";
import imageone from "../../Images/imageone.png";

function DisplayBooks(props) {
  return (
    <>
      {/* <Header /> */}
      <div className="align_books">
        <div className="book_box">
          <div>
            <div className="book_part">
              <div className="booksImage">
                <img src={imageone} alt="" className="book-image" />
              </div>
            </div>
            <div className="Bottom_part">
              <div className="book_text" > {props.arrayBook.name}</div>
              <div className="Author_part">{props.arrayBook.author}</div>
              <div>
                <span className="rating_part">
                  {" "}
                  4.5
                  
                  <span className="number_part">(20)</span>
                  
                </span>
                <div className="booksPrice">Rs.{props.arrayBook.price}</div>
                {/* <span className='quantity'>({props.arrayBook.quantity})</span> */}

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default DisplayBooks;
