import React from 'react';
import './App.css';
import Header from "./companets/Header";
import Nav from "./companets/Nav";
import Content from "./companets/Content";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Content/>
        </div>
    )
};

export default App;