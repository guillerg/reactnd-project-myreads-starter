import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './bookShelf'

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
            <BookShelf books={books} onShelfChange={onShelfChange} section='currentlyReading' title='Currently Reading'/>
            <BookShelf books={books} onShelfChange={onShelfChange} section='wantToRead' title='Want to Read'/>
            <BookShelf books={books} onShelfChange={onShelfChange} section='read' title='Read'/>
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
