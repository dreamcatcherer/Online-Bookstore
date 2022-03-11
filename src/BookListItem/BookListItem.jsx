import React from "react";
import css from "./BookListItem.module.css";
import BookListItemImage from "../BookListItemImage/BooksListItemImage.jsx";


const BooksListItem = (props) => {
   return (
     <div className={css.listItem}>
      <BookListItemImage url={props.url} title={props.title} />
      <p className={css.titleStyle}>{props.title}</p>
     </div>
   );
}

export default BooksListItem;