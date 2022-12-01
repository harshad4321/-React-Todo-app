import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./components/About/About";
import Header from "./components/Header/Header";
import TodoApp from "./components/Todo/todoApp";



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<TodoApp />} />
                    < Route path='/about' element={<About />} />
                </Routes >
            </BrowserRouter >
        </div>

    )
} 