import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books: books}) //same as ({books})
    })
  }

  changeBookShelf = (book, shelf) => {
    this.setState((books) => {
      books : books.books.filter((b) => {
        if (b.id === book.id){
          b.shelf = shelf
        }
        return b
      })
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onShelfChange={this.changeBookShelf}
          />
        )}/>

        <Route exact path='/search' render={() => (
          <SearchBooks />
        )}/>

      </div>
    )
  }
}

export default BooksApp
