import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBookPages from "./pages/AddBookPages";
import './App.css'


 function App () {
    const [books , setBooks]= useState([])
    const addBook = (book)=>{
        setBooks([...books, book])
    };
    const deleteBook = (index)=>{
        setBooks(books.filter((_, i) => i !==index))
    }
  return(
    
        <div className="app">
           < Navbar/>
          <Routes>
           < Route path="/" element={<Home books={books}  deleteBook={deleteBook}/>}/>
           < Route path="/add" element={<AddBookPages addBook={addBook}/>}/>
          </Routes>
        </div>
    
   

    
  );
 };

export default App;
