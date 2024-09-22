import { createReducer, on } from '@ngrx/store'
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from './book.actions'
import { Book } from '../models/book'

export const initialState: Book[] = [];

//on used to register actions
export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state) => { return state }),
    on(AddBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(AddBookFailure, (state, { error }) => {
        console.log(error);
        return state;
    }),
    on(RemoveBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
    //How the reducer handles the AddBook action
    //Registering listener for AddBook action
    //All books from previos is copied by the reducer
    //New book is added as an object
    //(state, ) state here is the current state
    //state.filter returns new array, containing all the books except the one we want to delete
)