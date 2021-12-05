import React from "react";

class FinishBooking extends React.Component{

    constructor(props) {
        super();
        console.log(props.location.state)

    }
    render(){
    
    return(
        <div>
            {this.state}

        </div>
        
    );
    
    }
}

export default FinishBooking