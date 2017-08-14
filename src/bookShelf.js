import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default class ListBooks extends Component {
  static PropTypes= {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    section: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  render() {

    //Object destructuring ES6
    const {books, onShelfChange, section, title} = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(book=>book.shelf===section).map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
