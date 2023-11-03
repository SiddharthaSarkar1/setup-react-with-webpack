import React from "react";
import TodaysDate from "./TodaysDate";
import { Books, BooksHOC, Songs } from "./Hoc";

const DB = {
  books: [
    {id: 1, title: "Harry Potter", author:"Rowling" },
    {id: 2, title: "Outliner", author: "gladwell" }
  ],
  songs: [
    {id: 1, title: "Du Hast", album: "sehnsucht"},
    {id: 2, title: "Desert Song", album: "Brand new day"}
  ]
};

const App = () => {
  
  return (
      <>
      <h1>Hello React using webpack</h1>
      <h2>Created by Sidd</h2>
      <TodaysDate/>
      <Books books={DB.books}/>
      <Songs songs={DB.songs}/>
      <BooksHOC books={DB.books}/>
      </>
  );
};

export default App;