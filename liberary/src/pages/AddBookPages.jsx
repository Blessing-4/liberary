import React from "react";
import AddBook from "../components/AddBook";

const AddBookPages =({addBook})=>{
    return(
        <div>
            <h1>ADD A NEW BOOK</h1>
            <AddBook addBook={addBook}/>
        </div>
)
}
export default AddBookPages