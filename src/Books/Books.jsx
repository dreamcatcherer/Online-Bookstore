import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import BookDetails from "../BookDetails/BookDetails";
import styles from "./Books.module.css";
import BookIntro from "../BookIntro/BookIntro.jsx";
import BookImage from "../BookImage/BookImage.jsx";

const Book = (props) => {
  const [fetchedData, setFetchedData] = useState({});
  //data fetching
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://demo0732234.mockable.io/books");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let showBookDetails;
  if (!isEmpty(fetchedData)) {
    var book = fetchedData[props.categoryId][props.bookId];
    showBookDetails = (
      <div className={styles.wallpaper}>
        <div className={styles.title}>
          <h3>{book.title}</h3>
        </div>
        <div>
          <BookImage  url = {book.image._url} text = {book.title}/>

          <BookIntro introduction = {book.introduction} />
          <BookDetails
            author = {book.author}
            pages={book.pages}
            ISBN={book["ISBN"]}
            publisher={book.Publisher}
            language={book.language}
          />
        </div>
      </div>
    );
  } else {
    showBookDetails = 
      <div>
        <center>Now Loading...</center>
      </div>;
    
  }
  return (
  showBookDetails
  )
};

export default Book;
