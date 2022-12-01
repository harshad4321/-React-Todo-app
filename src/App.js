import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import TodoApp from "./components/Todo/todoApp";




// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <>
            <Header />
            <About />
            <TodoApp />
        </>
    )
} 