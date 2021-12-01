import React from "react";

class FinishBooking extends React.Component{

    constructor(props) {
        super();
        console.log(props.joinObj);
        this.state = {
            ...props.joinObj
        }
    }
    render(){
    
    return(
        <div>
            {this.state.subject}
            {this.state.room}
            {this.state.note}
        </div>
        
    );
    
    }
}

export default FinishBooking