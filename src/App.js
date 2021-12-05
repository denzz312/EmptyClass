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
import {BrowserRouter as Router, Routes} from "react-router-dom";

class App extends React.Component {
    render() {

        return (
            <Router>
                <div className="App">
                    <Header/>
                    <body className="App-body">
                    <Home/>
                    <Routes>
                        <Route path={"/"}></Route>
                    </Routes>
                    </body>
                    <Footer/>
                </div>
            </Router>

        );
    }
}


export default App;
