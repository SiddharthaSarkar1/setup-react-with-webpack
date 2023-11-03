import React from "react";

const Books = ({ books }) => {
  return (
    <div>
      <h1>Books</h1>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            Book: {book.title} / Author: {book.author}
          </li>
  ))}
      </ul>
    </div>
  );
};

const Songs = ({ songs }) => {
    return (
      <div>
        <h1>Songs</h1>
  
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              Song: {song.title} / Album: {song.author}
            </li>
    ))}
        </ul>
      </div>
    );
  };

  const withHOC = (Component, classes) => {
    return (props) => (
        <div className={classes}>
            <Component {...props}></Component>
        </div>
    )
  }

  const BooksHOC = withHOC(Books, 'dark');
  
export {Books, Songs, BooksHOC};
