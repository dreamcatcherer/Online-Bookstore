import React ,{useEffect,useState} from "react";
import { Switch, Route,HashRouter } from "react-router-dom";
import { isEmpty } from "lodash";
import Home from "./Home/Home.jsx";
import Header from "./Header/Header.jsx";
import BooksList from "./BookList/BookList.jsx";
import Books from "./Books/Books.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import ThankYou from "./ThankYou/ThankYou.jsx";
import PageNotFound from "./ErrorPage/ErrorPage.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const App = () => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    // data fetching code
    const fetchData = async () => {
      const result = await fetch("http://demo0732234.mockable.io/books");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let showAllBooks;
  let showClassicBooks;
  let showFantasyBooks;
  let showSciFiBooks;
  let showAdventureBooks;

  if (!isEmpty(fetchedData)) {
    var Classics = Object.values(fetchedData.classics);
    var Fantasy  = Object.values(fetchedData.fantasy);
    var SciFi = Object.values(fetchedData.sciFi);
    var Adventure = Object.values(fetchedData.adventure);
 
    var allBooks = Classics
      .concat(Fantasy)
      .concat(SciFi)
      .concat(Adventure);


    showAllBooks = (
      <BooksList books={allBooks} pageTitle="All Books" />
    );
    showClassicBooks = (
      <BooksList books={Classics} pageTitle="Classics Books" />
    );
    showFantasyBooks = (
      <BooksList books={Fantasy} pageTitle="Fantasy Books" />
    );
    showSciFiBooks = (
      <BooksList books={SciFi} pageTitle="Science Fiction Books" />
    );
    showAdventureBooks = (
      <BooksList books={Adventure} pageTitle="Adventure Books" />
    );
  } else {
    showAllBooks = <div><center>Data is fetching</center></div>;
    showClassicBooks = <div><center>Data is fetching</center></div>;
    showFantasyBooks = <div><center>Data is fetching</center></div>;
    showSciFiBooks = <div><center>Data is fetching</center></div>;
    showAdventureBooks = <div><center>Data is fetching</center></div>;
  }


  return (
    <>

      
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/contactUs" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route
            path="/allbooks"
            exact
            render={() => showAllBooks}
          />
          <Route
            path="/classics"
            exact
            render={() => showClassicBooks}
          />
          <Route
            path="/fantasy"
            exact
            render={() => showFantasyBooks}
          />
          <Route
            path="/scifi"
            exact
            render={() => showSciFiBooks}
          />
          <Route
            path="/adventure"
            exact
            render={() => showAdventureBooks}
          />


          {/* passing parameters via a route path */}
          <Route
            path="/book/:categoryId/:bookId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <Books
                categoryId={match.params.categoryId}
                bookId={match.params.bookId}
              />
            )}
          />
          <Route path="/thankyou" exact component={ThankYou} />
          <Route path="/error" exact component={PageNotFound} />
          <Route component={PageNotFound} />

        </Switch>
      </HashRouter>
  
    </>
  );
}

export default App;