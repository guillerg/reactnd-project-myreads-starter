import React, { Component } from 'react'
import BookShelfChangerMenu from './BookShelfChangerMenu'
import PropTypes from 'prop-types'

class Book extends Component {
  static PropTypes= {
    book: PropTypes.array.isRequired
  }
  render(){

    const {book} = this.props

    return(
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
    )
  }
}

export default Book
