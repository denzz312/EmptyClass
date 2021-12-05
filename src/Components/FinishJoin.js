import React from "react";
import { FaCalendarCheck } from "react-icons/fa";

export default class FinishJoin extends React.Component {
    constructor(props) {
        super();
        console.log(props.joinObj);
        this.state = {
            ...props.joinObj
        }

    }

    render() {

        return (
            <div className = "FinishJoin">
                <div>
                    <FaCalendarCheck size={150} style={{ color: 'maroon' }} />
                </div>
                <div>
                    <p>Study Session Booked!</p>
                </div>
                <div className="confirmationList">
                    <div>
                        <p>Session Details</p>
                    </div>
                    <div>
                        {this.state.subject}
                    </div>
                    <div>
                        {this.state.room}
                    </div>
                    <div>
                        {this.state.note}
                    </div>
                </div>
            </div>

        );

    }

}