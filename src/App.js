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
    var newBook1 =Object.assign({}, book);
    newBook1.shelf=e.target.value;

    BooksAPI.update(book,e.target.value).then(()=>{
          console.log(newBook1);
          this.setState((state) => ({selectedBooks:state.selectedBooks.filter((b) => b.id!=book.id ).concat(newBook1)}));
      });

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={(history)=>(<HomePage selectedBooks={this.state.selectedBooks}
                                                            onBookShelfChange={(e,book) => {
                                                              this.onBookShelfChange(e,book);
                                                            }}
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
