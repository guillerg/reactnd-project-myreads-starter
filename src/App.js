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
    BooksAPI.update(book,newShelf)
    //Call updated list of books
    //  BooksAPI.getAll().then((books)=>{
    //    this.setState({books: books})
    //  })
    //or update current state's book only
      this.setState((state) => {
        books:state.books.forEach((b) => {
          if(b.id===book.id){
            b.shelf = newShelf
            return b
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
