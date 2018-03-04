import React,{Component} from 'react';
class BooksShelf extends Component{
 render(){
          return <div className="bookshelf">
                    <ul className="books-grid">
                     {this.props.books.map((book) =>
                       (<li className="book">
                         <div className="book-top">
                            <picture >
                              <source srcSet={book.imageLinks.thumbnail}/>
                              <img src={book.imageLinks.thumbnail} className="book-cover"/>
                            </picture>
                            <button className="book-shelf-changer">
                                  <select>
                                    <option value="Move to" disabled="true">Move to</option>
                                    <option value="Currently Reading">&#10004; Currently Reading</option>
                                    <option value="Want to Read">Want to Read</option>
                                    <option value="Read">Read</option>
                                    <option value="None">None</option>
                                  </select>
                            </button>
                          </div>
                          <div className="book-title"><strong>{book.title}</strong></div>
                          {book.authors.map((author) =>(<div className="book-authors"><strong>{author}</strong></div>))}
                          </li>
                        )
                      )
                    }
                    </ul>
                 </div>;
         }
}

export default BooksShelf
