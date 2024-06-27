import React from "react";
import BookList from "../components/Booklist";
const Home =({books, deleteBook})=>{
    return(
        <div>
            <h1>library Management</h1>

           
            <BookList books={books} deleteBook={deleteBook}/>
        </div>
    )
}
export default Home