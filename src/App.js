import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import MainContent from './component/MainContent';
import HeaderMenu from "./component/HeaderMenu";
import AppRouter from "./router/router";

class App extends Component {
  render() {
    return (
        <div>
            <HeaderMenu/>
            <Header/>
            <MainContent/>
        </div>
    );
  }
}

export default App;
