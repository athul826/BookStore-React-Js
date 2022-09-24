import React, { useEffect, useState } from 'react';
import BookService from '../../Services/BookService';
import "./DashBoard.css";
import DisplayBooks from '../../Components/Books/DisplayBooks';
import Header from '../../Components/Header/Header';


const bookservice = new BookService();
function DashBoard(props) {

    const [bookArray, setBookArray] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = () => {
        bookservice.getAllBooks() .then((response) => {
            console.log(response);
            setBookArray(response.data.books)
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
         <>

            < Header />


            <div className='topics'>
                <span className='heading'>Books({bookArray.length})</span>

                <select className='arrange'>
                    <option>Sort by relevance</option>
                    <option>Price:Low to High</option>
                    <option>Price:High to Low</option>
                    <option>Newest Arrivals</option>
                </select>
            </div>

            <div className='bookscontainer' >
             
                <div className='getbooks' >
                {bookArray.length > 0 && bookArray.map((book, index) => (
                    <DisplayBooks key={index} arrayBook={book} getBooks={getBooks} />
                    ))}

                    </div>
                </div>
    
            </>
        );
    }

export default DashBoard;