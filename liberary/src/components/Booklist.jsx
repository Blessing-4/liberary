import React from "react";
const BookList = ({books, deleteBook}) => {
    return (
        <div>
            <h2>Book list</h2>
            <ul>
                {books.map( (book, index)=>(
                    <li key={index}>{book.title} by{book.authur} <button onClick={()=>deleteBook(index)}>Delete</button></li>
          
                ))}
            </ul>
        </div>
    )
}
export default BookList