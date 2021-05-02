import React, { Component } from 'react';
import './App.css';
import About from 'components/index.js'
import Header from 'components/header'
import Contact from 'components/contact.js'
import Portfolio from 'components/portfolio2.js'
import Footer from 'components/footer'
class App extends React.Component {
    render() {
        return ( <
            div >
            <
            Header / >
            <
            div id = "About" >
            <
            About / >
            <
            div >
            <
            /div> <
            div >
            <
            Contact / >
            <
            /div> <
            div >
            <
            Portfolio / >
            <
            /div> <
            /div> <
            Footer / >
            <
            /div>
        );
    }
}

export default App;