import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchForBook from './SearchForBook';
import HomePage from './HomePage'
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
    if(!this.state.allBooks.includes(book)){
      this.setState((state) =>
                              ({allBooks:state.allBooks.concat(Object.assign(book, {shelf:bookShelfName}))
                               })
                    );
    } else {
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
    }

    console.log(this.state.allBooks);

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
                                          <HomePage onBookShelfChange={this.onBookShelfChange} allBooks={this.state.allBooks}/>
                                          )}
        />
        <Route path='/search' render={()=>(
                                            <SearchForBook onBookShelfChange={this.onBookShelfChange} books={this.state.allBooks}/>
                                          )}
        />
      </div>
    );
  }
}

export default App;
