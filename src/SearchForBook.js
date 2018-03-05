import React,{Component} from 'react';
import BooksShelf from './BooksShelf';
import * as BooksAPI from './BooksAPI';
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
        return <div className="search-books-bar">
                  <input type="text" className="search-books-bar" placeholder="Seach by Author Name or Title"
                                     value ={this.state.query}
                                     onChange={(event)=>this.SearchForBook(event.target.value)} />
                  <BooksShelf books={this.state.books} onBookShelfChange={this.props.onBookShelfChange} />
               </div>

}
}

export default SearchForBook
