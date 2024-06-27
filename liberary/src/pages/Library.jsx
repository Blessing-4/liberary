
import React, {useState} from "react";
import AddBook from "../components/AddBook";
import BookList from "../components/Booklist";

function library () {
    const [books, setBooks] = useState([]);
    const addBook = (title, author) =>{
        setBooks([...books, {title, author}]);
    };
    const removeBook =( index)=>{
        const newBooks = books.filter((book, i)=> i !== index);
        setBooks(newBooks)
    }
    return(
        <div>
            <h1>Library Management</h1>
            <AddBook addBook={ addBook}/>
            <BookList books ={books} removeBook ={removeBook}/>
        </div>
    )
}
export default library