import React from "react";
import FinishJoin from "./FinishJoin";
import {Link} from "react-router-dom";

class JoinOthers extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showJoinNow: false,
            joinObj: {}
        }
    }


    render() {

        let data = [{
            "subject": "SOEN 357",
            "room": "629, Hall Building",
            "note": "Feel free to join!",
        }, {
            "subject": "COEN 377",
            "room": "521, Hall Building",
            "note": "Study whatever you want..",
        }, {
            "subject": "ENGR 233",
            "room": "675, Hall Building",
            "note": "Feel free to join!",
        }, {
            "subject": "ENGR 390",
            "room": "850, Hall Building",
            "note": "Be quiet please, in zoom lecture",
        }, {
            "subject": "SOEN 352",
            "room": "665, Hall Building",
            "note": "Be quiet please, in zoom lecture",
        }, {
            "subject": "ENGR 301",
            "room": "921, Hall Building",
            "note": "Study whatever you want..",
        }, {
            "subject": "SOEN 470",
            "room": "970, Hall Building",
            "note": "Feel free to join!",
        }, {
            "subject": "COEN 210",
            "room": "417, Hall Building",
            "note": "Study whatever you want..",
        }, {
            "subject": "SOEN 335",
            "room": "740, Hall Building",
            "note": "Feel free to join!",
        }];
        return (
            <div className="joinOther">
                {(() => {
                    if (!this.state.showJoinNow) {
                        return (
                            <div>
                                <div className="formDivider2">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th> Course Title</th>
                                            <th> Room/Building</th>
                                            <th> Note</th>
                                            <th> Join Here</th>
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
                                <br/>
                                <div><Link to="/">
                                    <button className="buttons"
                                            onClick={this.handleJoin}>
                                        Return
                                    </button>
                                </Link></div>
                            </div>

                        )
                    } else {
                        return <FinishJoin joinObj={this.state.joinObj}></FinishJoin>
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
            joinObj: obj
        })
    }
}

export default JoinOthers