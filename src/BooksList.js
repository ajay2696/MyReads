import React,{Component} from 'react';
import PropTypes from 'prop-types';
class BooksList extends Component{
 static propTypes ={
   books:PropTypes.array.isRequired,
   onBookShelfChange:PropTypes.func.isRequired
 }
 render(){
          return (<div>
                   <ul className="books-grid">
                     {this.props.books.map((book) =>
                       (<li key={book.id} className="book">
                         <div className="book-top">
                            <picture >
                              <source srcSet={book.imageLinks.thumbnail}/>
                              <img src={book.imageLinks.thumbnail} className="book-cover" alt={book.title}/>
                            </picture>
                            <button className="book-shelf-changer">
                                  <select onChange={(e)=>this.props.onBookShelfChange(e,book)} value={book.shelf}>
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
                                                          ))
                            }
                        </li>
                        )
                       )
                     }
                    </ul>
                 </div>);
         }
    }

export default BooksList
