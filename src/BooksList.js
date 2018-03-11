import React from 'react';
import PropTypes from 'prop-types';
const BooksList =(props) => {
    return (
        <div>
            <ul className="books-grid">
                {props.books.map((book) =>{
                    const bookThumbnail = book.imageLinks ?
                        book.imageLinks.thumbnail :"http://via.placeholder.com/128x193?text=No%20Cover";
                    return (
                        <li key={book.id} className="book">
                            <div className="book-top">
                                <picture>
                                    <source srcSet={bookThumbnail}/>
                                    <img src={bookThumbnail} className="book-cover" alt={book.title}/>
                                </picture>
                                <button className="book-shelf-changer">
                                    <select onChange={(e)=>props.onBookShelfChange(e,book)} value={book.shelf}>
                                        <option value="moveTo" disabled="true">Move to</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead"> Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </button>
                            </div>
                            <div className="book-title"><strong>{book.title}</strong></div>
                            {Array.isArray(book.authors)&&(book.authors.map((author) =>(
                                <div key={author}
                                    className="book-authors">
                                    <strong>{author}</strong>
                                </div>)
                            ))}
                        </li>
                    )})
                }
            </ul>
        </div>
    );
}
BooksList.propTypes = {
    books :PropTypes.array.isRequired,
    onBookShelfChange :PropTypes.func.isRequired
}
export default BooksList;
