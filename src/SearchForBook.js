import React,{Component} from 'react';
import BooksList from './BooksList';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
class SearchForBook extends Component{
state={
  books:[]
}
SearchForBook=(query)=>{
  const books =BooksAPI.search(query).then((results)=>{
    console.log(results);
    if(Array.isArray(results)){
        this.setState({books:results});
    } else {
    this.setState({books:[]});
    }
  });
}
render(){
        return <div >
                  <div className ="search-books-bar" >
                  <Link to="/" className="close-search">Close Search </Link>
                  <input type="text" placeholder="Seach by Author Name or Title"
                                     value ={this.state.query}
                                     onChange={(event)=>this.SearchForBook(event.target.value)} />
                  </div>
                  <div className="search-books-results">
                  <BooksList books={this.state.books} onBookShelfChange={this.onBookShelfChange} />
                  </div>
               </div>

}
}
export default SearchForBook
