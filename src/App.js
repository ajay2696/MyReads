import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchForBook from './SearchForBook';
import HomePage from './HomePage'
class App extends Component {
  state={
          selectedBooks:[]
        }
  componentDidMount=()=>{
    BooksAPI.getAll().then((books) =>{
      this.setState({selectedBooks:books})
    });
  }
  onBookShelfChange=(e,book)=>{
    let bookShelfName =e.target.value;
    BooksAPI.update(book,bookShelfName);
    let books =this.state.selectedBooks.filter((b) => b.id!=book.id );
    let newBook1 =book;
    newBook1.shelf =bookShelfName;
    books.push(newBook1);
    this.setState({selectedBooks:books});
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={(history)=>( <HomePage selectedBooks={this.state.selectedBooks}
                                                       onBookShelfChange={this.onBookShelfChange}
                                            />
                                            )}
        />
        <Route path='/search' render={({history})=>(
                                            <SearchForBook selectedBooks={this.state.selectedBooks}
                                                           onBookShelfChange={(e,book) => {
                                                             this.onBookShelfChange(e,book);
                                                           }} />
                                          )}
        />
      </div>
    );
  }
}

export default App;
