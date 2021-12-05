import { react } from "@babel/types";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class SessionDetails extends React.Component {

    finish(){
        this.props.history.push({
            pathname: "/finish",
            state:{
                ...this.state,
                ...this.props.location.state
            }

        })
    }

    constructor(props) {

        super();
        if(!props.location.state){

            props.history.push("/");
            return;
        }
        this.state = {
            ...props.location.state,
            title: "",
            note:""

        }
        console.log(this.state)
    }

    render() {

        return (
            <div>
                <div className="Details">
                    <div className="sessionDetailsPreferences">
                        <p>Preferences</p>
                        <div className="sessionCheckBox">
                            <div>
                                <input type="checkbox"
                                    name="studyType"
                                    value="alone"/>
                                <label htmlFor="alone">
                                     Study Alone
                                </label>
                            </div>
                            <br></br>
                            <div>
                                <input type="checkbox"
                                    name="studyType"
                                    value="group" />
                                <label htmlFor="group">
                                    Allow Join
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="sessionDetailsInfo">
                        <p>Identity Room & Notice</p>
                        <div className = "sessionTextBox">
                            <div className = "identityRoom">
                                <textarea
                                    name = "identityRoom"
                                    style = {{width: "55%", height: "20px"}}
                                    defaultValue={this.state.title}
                                    onChange = {(e)=>{
                                        this.setState({
                                            title: e.target.value
                                        })
                                    }}/>
                            </div>
                            <br></br>
                            <div className = "descriptionText">
                                <textarea 
                                    name = "description"
                                    style = {{width: "87%", height: "300px"} }
                                    defaultValue={this.state.note}
                                    onChange = {(e)=>{
                                        this.setState({
                                            note: e.target.value
                                        })
                                    }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="buttonPlace">
                    <div>

                            <button className="buttons" onClick={
                                this.finish.bind(this)
                            }>Finish</button>

                    </div>
                    <br></br>
                    <div>
                        <Link to="/search">

                            <button className="buttons">Return</button>
                        </Link>
                    </div>
                </div>
            </div>

        );

    }
}

export default SessionDetails