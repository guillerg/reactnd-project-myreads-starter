import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
  static PropTypes= {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
  render() {

    //Object destructuring ES6
    const {books, onShelfChange} = this.props

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
                      <Book book={book} onShelfChange={onShelfChange}/>
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
                      <Book book={book} onShelfChange={onShelfChange}/>
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
                      <Book book={book} onShelfChange={onShelfChange}/>
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
