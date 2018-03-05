import React, { Component } from 'react';
import './App.css';
import BooksShelf from './BooksShelf';
import * as BooksAPI from './BooksAPI';
import SearchForBook from './SearchForBook';
class App extends Component {
  state={
          allBooks:[]
        }
  componentDidMount=()=>{
    BooksAPI.getAll().then((books) =>{
      this.setState({allBooks:books  })
    });
  }
  onBookShelfChange=(e,book)=>{
    let bookShelfName =e.target.value;
    BooksAPI.update(book,bookShelfName);
    this.setState((state) =>
                            ({allBooks:state.allBooks.map((b) =>
                                                               {if(b.id === book.id) {
                                                                    b.shelf=bookShelfName;
                                                                  }
                                                                return b;
                                                                }
                                                              )
                             })
                  );
    console.log(this.state.allBooks);

  }

    /*<header className="list-books-title">
      <h1>MyReads</h1>
    </header>
    <BooksShelf bookShelfType='currentlyReading'
                bookShelfTitle='Currently Reading'
                books={this.state.allBooks.filter(book => book.shelf==='currentlyReading')}
                onBookShelfChange={this.onBookShelfChange} />
    <BooksShelf bookShelfType='wantToRead'
                bookShelfTitle='Want to Read'
                books={this.state.allBooks.filter(book => book.shelf==='wantToRead')}
                onBookShelfChange={this.onBookShelfChange} />
    <BooksShelf bookShelfType='read'
                bookShelfTitle='Read'
                books={this.state.allBooks.filter(book => book.shelf==='read')}
                onBookShelfChange={this.onBookShelfChange} />*/
  render() {
    return (
      <div className="app">
        <SearchForBook onBookShelfChange={this.onBookShelfChange}/>
      </div>
    );
  }
}

export default App;
