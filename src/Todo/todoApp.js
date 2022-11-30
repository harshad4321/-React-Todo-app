import React, { Component } from 'react'
import './TodoApp.css';

export default class todoApp extends Component {
    render() {
        return (
            <div className='todo-container'>
                <form className='input-section'>
                    <h1>Todo App</h1>
                    <input type="text" placeholder='Enter your Items...' />

                </form>
                <ul>
                    <li> Items </li>
                    <li> Items </li>

                </ul>
            </div >

        )

    }
}
