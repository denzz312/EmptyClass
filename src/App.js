import {render} from '@testing-library/react';
import logo from '../src/logo192.png';
import './App.css';
import React from "react";
import Header from './Components/Header';
import BodyComponent from './Components/BodyComponent';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SearchResults from './Components/SearchResults';
import SessionDetails from './Components/SessionDetails';
import JoinOthers from "./Components/JoinOthers";

class App extends React.Component {
    render() {

    return (
      <div className="App">
        <Header/>
        <body className="App-body">
        <SessionDetails/>
        </body>
        <Footer/>
      </div>
    );
  }
}

export default App;
