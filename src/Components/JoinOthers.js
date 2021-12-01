import React from "react";
import FinishBooking from "./FinishBooking";

class JoinOthers extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showJoinNow: false,
            joinObj :{}
        }
    }



    render() {

        let data = [{
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }, {
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }, {
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }, {
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }, {
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }, {
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }, {
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }, {
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }, {
            "subject": "SOEN 357",
            "room": "balabala",
            "note": "bababa",
        }];
        return (
            <div className="joinOther">
                {(() => {
                    if (!this.state.showJoinNow) {
                        return (
                            <div className="formDivider">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th> 123</th>
                                        <th> 123</th>
                                        <th> 123</th>
                                        <th> 123</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        data.map((item, index) => {

                                            return (
                                                <tr key={index}>
                                                    <td>{item.subject}</td>
                                                    <td>{item.room}</td>
                                                    <td>{item.note}</td>
                                                    <td>
                                                        <button className="buttons" onClick={() => {
                                                            this.joinNow(item)
                                                        }}>Join Now
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>


                                </table>

                            </div>
                        )
                    }else{
                        return <FinishBooking joinObj={this.state.joinObj}></FinishBooking>
                    }
                })()
                }
            </div>

        );

    }

    joinNow(obj) {
        console.log(obj)
        this.setState({
            showJoinNow: true,
            joinObj : obj
        })
    }
}

export default JoinOthers