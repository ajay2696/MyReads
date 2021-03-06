import React,{Component} from 'react';
import BooksList from './BooksList';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
class SearchForBook extends Component{
static propTypes={
    selectedBooks:PropTypes.array.isRequired,
    onBookShelfChange:PropTypes.func.isRequired
}
state={
    searchResultBooks:[]
}
SearchForBook=(query)=>{
    if(query ===''){
        this.setState({searchResultBooks:[]});
    } else {
        BooksAPI.search(query).then((results)=>{
            Array.isArray(results)?
                this.setState({searchResultBooks:results}):
                this.setState({searchResultBooks:[]});
        });
    }
}
render(){
    const searchResultBooks = this.state.searchResultBooks;
    const selectedBooks = this.props.selectedBooks;
    for(let i=0;i<searchResultBooks.length;i++){
        searchResultBooks[i].shelf ='none';
        for(let j=0;j<selectedBooks.length;j++){
            if( searchResultBooks[i].id === selectedBooks[j].id){
                searchResultBooks[i].shelf = selectedBooks[j].shelf;
            }
        }
        if(searchResultBooks[i].imageLinks===undefined){
            searchResultBooks[i].imageLinks ={thumbnail:''};
        }
    }

    return (
        <div>
            <div className ="search-books-bar" >
                <Link to="/" className="close-search">Close Search </Link>
                <input type="text" placeholder="Seach by Author Name or Title"
                    value ={this.state.query}
                    onChange={(event)=>this.SearchForBook(event.target.value)} />
            </div>
            <div className="search-books-results">
                <BooksList books={searchResultBooks} onBookShelfChange={this.props.onBookShelfChange} />
            </div>
        </div>);
}
}
export default SearchForBook
