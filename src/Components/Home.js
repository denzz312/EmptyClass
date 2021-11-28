import React from "react";

class Home extends React.Component{
 
    handleJoin(){
      console.log('clicked');
    }

    render(){
    
    return(
        <div>
          <div className="Form-container">
          </div>
          <br/>
          <div>
            -or-
          </div>
          <br/>
          <div>
            <button
              className="buttons"
              onClick={this.handleJoin}>
              Join Others
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
    );
    
    }
}

export default Home