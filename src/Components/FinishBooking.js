import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import {Link} from "react-router-dom";

class FinishBooking extends React.Component {

    constructor(props) {
        super();
        console.log(props.location.state)
        this.state = {
            ...props.location.state
        }

    }
    render() {

        return (
            <div className="FinishBooking">
                <br/>
                <div>
                    <FaCalendarCheck size={150} style={{ color: 'maroon' }} />
                </div>
                <div>
                    <p>Study Session Booked!</p>
                </div>
                <div className = "confirmationList">
                    <div>
                        <h3>Session Details</h3>
                    </div>
                    <div>
                        Room#: {this.state.room}
                    </div>
                    <div>
                        Building: Hall Building
                    </div>
                    <div>
                        Time: {this.state.time}
                    </div>
                    <div>
                        Title: {this.state.title}
                    </div>
                    <div>
                        Note: {this.state.note}
                    </div>
                </div>
                <br/>
                <div>
                    <Link to="/">
                        <button className="buttons">
                            Return to HomePage
                        </button>
                    </Link>
                </div>
                <br/>
            </div>


        );

    }
}

export default FinishBooking