import React from 'react';
import {Link} from 'react-router-dom';
import BooksList from './BooksList';
import PropTypes from 'prop-types';
const HomePage=(props) => {
    const currentlyReadingBooks =props.selectedBooks.filter(book => book.shelf==='currentlyReading');
    const wantToReadBooks =props.selectedBooks.filter(book => book.shelf==='wantToRead');
    const alreadyReadbooks =props.selectedBooks.filter(book => book.shelf==='read');
    return (
        <div>
            <header className="list-books-title">
                <h1>MyReads</h1>
            </header>
            <Link to='/search' className="open-search">Search</Link>
            <div className="bookshelf">
                <h1 className="bookshelf-title"> Currently Reading </h1>
                <BooksList books={currentlyReadingBooks}
                    onBookShelfChange={props.onBookShelfChange} />
            </div>
            <div className="bookshelf">
                <h1 className="bookshelf-title"> Want to Reading </h1>
                <BooksList books={wantToReadBooks}
                    onBookShelfChange={props.onBookShelfChange} />
            </div>
            <div className="bookshelf">
                <h1 className="bookshelf-title"> Read </h1>
                <BooksList books={alreadyReadbooks}
                    onBookShelfChange={props.onBookShelfChange} />
            </div>
        </div>);
}
HomePage.propTypes ={
    selectedBooks:PropTypes.array.isRequired,
    onBookShelfChange:PropTypes.func.isRequired
}
export default HomePage;
