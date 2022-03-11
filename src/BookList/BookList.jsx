import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import BooksListItem from "../BookListItem/BookListItem.jsx";
import css from "./BookList.module.css";

const BooksList = props => {
  return (
    <div className={css.wholeDiv}>
      <div className={css.titleDiv}><h1>{props.pageTitle} - Next Book</h1></div>
      <ul className={css.booksList}>
        {props.books.map((book,index) => (
          <Link key={index} className={css.clickBlock} to={"/book/"+book.categoryId+"/"+book.bookId}>
            <li key={index}>
              <BooksListItem url={book.image._url} title={book.title} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired
};
export default BooksList;