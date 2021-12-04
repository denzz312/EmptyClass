import {render} from '@testing-library/react';
import logo from '../src/logo192.png';
import './App.css';
import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {BrowserRouter, Route,Routes,Link} from "react-router-dom";
import JoinOthers from "./Components/JoinOthers";
import SearchResults from "./Components/SearchResults";
import FinishBooking from "./Components/FinishBooking";
import SessionDetails from "./Components/SessionDetails";

class App extends React.Component {
    render() {

    return (
      <div className="App">
        <Header/>
        <body className="App-body">
        <BrowserRouter>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/join" element={<JoinOthers/>}/>
                <Route path="/search" element={<SearchResults/>}/>
                <Route path="/session" element={<SessionDetails/>}/>
                <Route path="/finish" element={<FinishBooking/>}/>
                
            </Routes>
        </BrowserRouter>
        </body>
          
        <Footer/>
      </div>
    );
  }
}

export default App;
