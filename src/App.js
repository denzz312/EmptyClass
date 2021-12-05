import {render} from '@testing-library/react';
import logo from '../src/logo192.png';
import './App.css';
import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {BrowserRouter, Route,  Switch} from "react-router-dom";
import JoinOthers from "./Components/JoinOthers";
import SearchResults from "./Components/SearchResults";
import FinishBooking from "./Components/FinishBooking";
import SessionDetails from "./Components/SessionDetails";

class App extends React.Component {
    render() {

    return (
      <div className="App">
        <Header/>
        <div className="App-body">
        <BrowserRouter>


            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/join" component={JoinOthers}/>
                <Route path="/search" component={SearchResults}/>
                <Route path="/session" component={SessionDetails}/>
                <Route path="/finish" component={FinishBooking}/>

            </Switch>
        </BrowserRouter>
        </div>
          
        <Footer/>
      </div>
    );
  }
}

export default App;
