import React, { Component } from 'react';
import './App.css';
import BooksShelf from './BooksShelf';
import * as BooksAPI from './BooksAPI';
class App extends Component {
  state={
          allBooks:[],
          currentlyReadingBooks:[],
          wantToReadBooks:[]
        }
  componentDidMount=()=>{
    BooksAPI.getAll().then((books) =>{
      this.setState({allBooks:books,
                     currentlyReadingBooks:books.filter(book => book.shelf==='currentlyReading'),
                     wantToReadBooks:books.filter(book => book.shelf==='wantToRead')});
    });
  }
  render() {
    return (
      <div className="app">
        <header className="list-books-title">
          <h1>MyReads</h1>
        </header>
        <h1 className="bookshelf-title">Currently Reading</h1>
        <BooksShelf books={this.state.allBooks.filter(book => book.shelf==='currentlyReading')}/>
        <h1 className="bookshelf-title">Want to Read</h1>
        <BooksShelf books={this.state.allBooks.filter(book => book.shelf==='wantToRead')}/>
        <h1 className="bookshelf-title">Read</h1>
        <BooksShelf books={this.state.allBooks.filter(book => book.shelf==='read')}/>
      </div>
    );
  }
}

export default App;
