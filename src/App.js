import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchForBook from './SearchForBook';
import HomePage from './HomePage';
class App extends Component {
 state = {
     books:[]
 }
 componentDidMount=()=>{
     BooksAPI.getAll().then((books) =>{this.setState({books})});
 }
 onBookShelfChange=(e,book)=>{
     let newBook1 =Object.assign({}, book);
     newBook1.shelf=e.target.value;
     BooksAPI.update(book,e.target.value).then(()=>
     {
         this.setState((state) =>(
             {books:state.books.filter((b)=>b.id!==book.id ).concat(newBook1)}
         ));
     });
 }

 render(){
     return (<div className="app">
         <Route exact path='/'
             render={()=>(<HomePage selectedBooks={this.state.books}
                 onBookShelfChange={(e,book) =>{this.onBookShelfChange(e,book);}}
             />)
             }
         />
         <Route path='/search'
             render={()=>(<SearchForBook selectedBooks={this.state.books}
                 onBookShelfChange={(e,book) =>{this.onBookShelfChange(e,book);}}
             />)
             }
         />
     </div>
     );
 }
}

export default App;
