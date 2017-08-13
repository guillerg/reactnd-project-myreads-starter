import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './Book'
import sortBy from 'sort-by'
import _ from 'lodash'

class SearchBooks extends Component {
  static PropTypes = {
    onShelfChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    query : '',
    foundBooks: []
  }

  updateQuery(query) {
      this.setState({
        query: query
      });
      //if (query.length > 0) {
        this.search(query);
      //}
    }

  search = _.debounce(query => {
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
  }, 300);


  render() {
    const { query, foundBooks } = this.state
    const { onShelfChange } = this.props

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
            {(foundBooks || []).map((book) => (
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

export default SearchBooks
