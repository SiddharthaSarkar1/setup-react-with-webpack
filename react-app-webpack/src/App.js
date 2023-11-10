import React from "react";
import TodaysDate from "./TodaysDate";
import { Books, BooksHOC, Songs, SongsHOC } from "./Hoc";
import BoxContainer from "./components/BoxContainer";
import MyButton from "./components/MyButton";
import Card from "./components/Card";

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
      <SongsHOC songs={DB.songs} />

      <p>Example of children props</p>
      <BoxContainer value={"This is props"}>
          <h3>This is children props example</h3>
          <p>Did you understand??</p>
      </BoxContainer>
      <Card>
      <MyButton>Hey there!!</MyButton>
      <MyButton>Hello there!!</MyButton>
      </Card>

      <Card>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tempora modi pariatur vel eaque provident? Blanditiis necessitatibus iste alias, libero unde rerum nihil quaerat.</p>
      </Card>
      </>
  );
};

export default App;