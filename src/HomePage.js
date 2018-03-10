import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import BooksList from './BooksList';

class HomePage extends Component
{
render(){
          return (<div>
                    <header className="list-books-title">
                      <h1>MyReads</h1>
                    </header>
                    <Link to='/search' className="open-search">Search</Link>
                    <div className="bookshelf">
                      <h1 className="bookshelf-title"> Currently Reading </h1>
                      <BooksList books={this.props.selectedBooks.filter(book => book.shelf==='currentlyReading')}
                                  onBookShelfChange={this.props.onBookShelfChange} />
                    </div>
                    <div className="bookshelf">
                      <h1 className="bookshelf-title"> Want to Reading </h1>
                      <BooksList books={this.props.selectedBooks.filter(book => book.shelf==='wantToRead')}
                                onBookShelfChange={this.props.onBookShelfChange} />
                    </div>
                    <div className="bookshelf">
                      <h1 className="bookshelf-title"> Read </h1>
                      <BooksList books={this.props.selectedBooks.filter(book => book.shelf==='read')}
                                onBookShelfChange={this.props.onBookShelfChange} />
                    </div>
                  </div>);
        }
}
export default HomePage
