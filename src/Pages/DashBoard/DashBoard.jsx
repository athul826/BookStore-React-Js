import React, { useEffect, useState } from "react";
import BookService from "../../Services/BookService";
import "./DashBoard.css";
import DisplayBooks from "../../Components/Books/DisplayBooks";
import Header from "../../Components/Header/Header";
import GetBookId from "../../Components/GetBookId/GetBookId";
import { Pagination } from "@mui/material";
import usePagination from "../../Components/Pagination/Pagination";

const bookservice = new BookService();
function DashBoard(props) {
  const [view, setView] = useState(true);
  const [bookdata, setBookdata] = useState("");
  const [bookArray, setBookArray] = useState([]);

  const [page, setpage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBooks();
  }, [search]);

  const getBooks = () => {
    setView(true);
    bookservice
      .getAllBooks()
      .then((response) => {
        console.log(response);
        if (search) {

          let filterBook = response.data.books.filter(books => books.name.toLowerCase().includes(search.toLowerCase()))
          setBookArray(filterBook)
      } else {
          setBookArray(response.data.books)
      }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const PER_PAGE = 8;

  var bookArrayLength = bookArray ? bookArray.length : 0;
  const pageCount = Math.ceil(bookArrayLength / PER_PAGE);
  const paginate = usePagination(bookArray, PER_PAGE);

  const changePage = (event, page) => {
    setpage(page);
    paginate.jump(page);
  };

  const listenToEachBook = (data) => {
    console.log("Listen to Book is calling..");
    setView(false);
    console.log(data);
    setBookdata(data);
  };
  const searchBook = (value) => {
    setSearch(value)
}
  return (
    <>
      <Header search={searchBook} />

      {view ? (
        <div>
          <div className="topics">
            <span className="heading">Books({bookArray.length})</span>

            <select className="arrange">
              <option>Sort by relevance</option>
              <option>Price:Low to High</option>
              <option>Price:High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          <div className="bookscontainer">
            <div className="getbooks">
              {paginate.currentData()
                ? paginate
                    .currentData()
                    .map((book, index) => (
                      <DisplayBooks
                        key={index}
                        arrayBook={book}
                        getBooks={getBooks}
                        listenToEachBook={listenToEachBook}
                      />
                    ))
                : "no book available"}
            </div>
          </div>
        </div>
      ) : (
        <GetBookId bookdata={bookdata} />
      )}

      <div className="pagination">
        <Pagination
          count={pageCount}
          page={page}
          onChange={changePage}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
}

export default DashBoard;
