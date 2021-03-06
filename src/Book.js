import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  static propTypes= {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    showStatus: PropTypes.bool
  }

  handleSelection = (event) => {
    event.preventDefault()

    if(this.props.onShelfChange){
      this.props.onShelfChange(this.props.book, event.target.value)
    }
  }

  render(){

    const {book} = this.props

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,height: 193,
            //template literals back-ticks
            backgroundImage: `url(${book.imageLinks&&book.imageLinks.smallThumbnail})`
          }}/>
          <div className="book-shelf-status" style={{ visibility: this.props.showStatus ? 'visible' : 'hidden' }}/>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={this.handleSelection}>
              <option value="nones" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {(book.authors || []).map(author => (
          <div key={author} className="book-authors">{author}</div>
        ))}
      </div>
    )
  }
}

export default Book
