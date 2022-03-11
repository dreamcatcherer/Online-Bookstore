import React from "react";
import styles from "./BookDetails.module.css";

const BookDetails = (props)=>{
	return (
	<div className = {styles.details}>
		  <h2>Book Details</h2>
		
		<div className={styles.detailsContainer}>
			<p>Author: {props.author}</p>
        	<p>Pages: {props.pages}</p>
        	<p>Language: {props.language}</p>
        	<p>ISBN: {props.ISBN}</p>
        	<p>Publisher: {props.publisher}</p>
        	

        </div>
	</div>
	);
};

export default BookDetails;