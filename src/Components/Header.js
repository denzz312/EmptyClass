import React from "react";
import ProfilePic from "./generic_student.png";
//import { FaBars } from "react-icons/fa";

class Header extends React.Component{
 
    render(){
    
    return(
        
          <header className="App-header">
            <div className="mLeft">
              {/* <button className="buttonMenu">
                <FaBars/>
              </button> */}
              <div className="title">
                  Class Tracker
              </div>
            </div>
            <div className="mRight">
                Stacy Doyle
                <img
                  src= {ProfilePic}
                  onClick={this.deletePost}
                  className = "ProfilePic"
                />
            </div>
          </header>
        
    );
    
    }
}

export default Header