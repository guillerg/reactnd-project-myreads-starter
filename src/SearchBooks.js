import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'
import sortBy from 'sort-by'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    query : '',
    foundBooks: []
  }

  updateQuery(query) {
    this.setState({
      query: query
    });

    if (query.length > 0) {
      this.search(query);
    } else {
      this.setState({
        foundBooks: []
      })
    }
  }

  search = query => {
    BooksAPI.search(query).then((fetch) => {
      if (fetch.error) {
        this.setState({
          foundBooks: []
        })
      } else {
          this.setState({
            foundBooks: fetch.sort(sortBy('title'))
        })
      }
    })
  }

  render() {

    const { query, foundBooks } = this.state
    const { onShelfChange, books } = this.props

    let matchShelfs = foundBooks.map(fb => {
      //Check if book already present in prop books
      const isShelvedBook = books.find((b) => b.id === fb.id)

      if(isShelvedBook){
        fb.shelf=isShelvedBook.shelf
      } else {
        fb.shelf='none'
      }
      return fb
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"  to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event)=>this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {(matchShelfs || []).map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange} showStatus={book.shelf!=='none'? true:false}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
