import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelfChangerMenu from './BookShelfChangerMenu'

class ListBooks extends Component {
  static PropTypes= {
    contacts: PropTypes.array.isRequired
  }
  render() {

    //Object destructuring ES6
    const {books} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter(book=>book.shelf==='currentlyReading').map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{
                            width: 128,height: 193,
                            //template literals back-ticks
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                          }}/>
                          <BookShelfChangerMenu />
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map(author => (
                          <div key={author} className="book-authors">{author}</div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter(book=>book.shelf==='wantToRead').map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{
                            width: 128,height: 193,
                            //template literals back-ticks
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                          }}/>
                          <BookShelfChangerMenu />
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map(author => (
                          <div key={author} className="book-authors">{author}</div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.filter(book=>book.shelf==='read').map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{
                            width: 128,height: 193,
                            //template literals back-ticks
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                          }}/>
                          <BookShelfChangerMenu />
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map(author => (
                          <div key={author} className="book-authors">{author}</div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
