import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookName: string = ""
  bookAuthor: string = ""

  books: Book[] = []


  ngOnInit(): void {
    let savedBookDetails = localStorage.getItem("books")
    this.books = savedBookDetails ? JSON.parse(savedBookDetails) : []
  }



  addBook() {
    this.books.push({
      id: uuidv4(),
      title: this.bookName,
      author: this.bookAuthor
    })

    localStorage.setItem("books", JSON.stringify(this.books))

    this.bookName = ""
    this.bookAuthor = ""
  }

  deleteBook(index: number) {
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }

}
