import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import BookImage from "../BookImage/BookImage.jsx";
import JurassicPark from "../images/BestSellers/JurassicPark.jpg";
import GameOfThrones from "../images/BestSellers/GameOfThrones.jpg";
import DaVinciCode from "../images/BestSellers/DaVinciCode.jpg";
import TheMartian from "../images/BestSellers/TheMartian.jpg";



const Home = () => {
  return (
    <>
      <main className={styles.homeMain}>
        <div className="highlyRatedBooksSection">
          <div className={styles.title}>
            <h3><center>BestSellers</center></h3>
          </div>
          <div className={styles.container}>
            <Link
              to="/book/adventure/0001-JurassicPark"
              className={styles.containerItem}
            >
              <BookImage
                url={JurassicPark}
                title="JurassicPark"
                className={styles.containerItem}
              />
              <p className={styles.bookName}>Jurassic Park</p>
            </Link>
            
            <Link
              to="/book/fantasy/0002-GameOfThrones"
              className={styles.containerItem}
            >
              <BookImage
                url={GameOfThrones}
                title="GameOfThrones"
                className={styles.containerItem}
              />
              <p className={styles.bookName}>Game Of Thrones</p>
            </Link>

            <Link
              to="/book/adventure/0002-The-Da-Vinci-Code"
              className={styles.containerItem}
            >
              <BookImage
                url={DaVinciCode}
                title="Da Vinci Code"
                className={styles.containerItem}
              />
              <p className={styles.bookName}>Da Vinci Code</p>
            </Link>

            <Link
              to="/book/adventure/0003-The-Martian"
              className={styles.containerItem}
            >
              <BookImage
                url={TheMartian}
                title="The Martian"
                className={styles.containerItem}
              />
              <p className={styles.bookName}>The Martian</p>
            </Link>

          </div>
        </div>

      </main>
    </>
  );
};

export default Home;
