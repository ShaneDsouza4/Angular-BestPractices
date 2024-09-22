import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

//props refer to which book to create. Here is the book to create, here is the id to find
//[Book] Add Book, is like a type.
//props<Book>() We want to submit a book to this action.
//props<{ bookId: string }>() Remove book by id of type string
export const AddBook = createAction('[Book] Add Book', props<Book>())
export const AddBookSuccess = createAction('[Book] Add Book Succesfully', props<Book>())
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{ error: any }>())


export const RemoveBook = createAction('[Book] Remove Book', props<{ bookId: string }>())
