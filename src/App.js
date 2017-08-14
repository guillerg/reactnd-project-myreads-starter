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

  changeBookShelf = (book, newShelf) => {

    //Check if book already present
    const isShelvedBook = this.state.books.find((sb) => sb.id === book.id)

    if(isShelvedBook){
      isShelvedBook.shelf=newShelf
    } else {
      book.shelf = newShelf
      this.state.books.push(book)
    }

    this.setState({books: this.state.books})

    BooksAPI.update(book,newShelf)

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
          <SearchBooks
            books={this.state.books}
            onShelfChange={this.changeBookShelf}
        />
        )}/>

      </div>
    )
  }
}

export default BooksApp
