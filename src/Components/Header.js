import React from "react";

class Header extends React.Component{
 
    render(){
    
    return(
        
            <header className="App-header">
            <div className="mLeft">
              <button className="buttons">
              </button>
            </div>
              <div className="title">
                Class Tracker
              </div>
            <div className="mRight">
              <button className="buttons">click here</button>
        
            </div>
          </header>
        
    );
    
    }
}

export default Header