import { react } from "@babel/types";
import React, {Component} from "react";

class SessionDetails extends React.Component {

    handleChange(event){
        console.log(event.target.value)
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
                                <label for="alone">
                                     Study Alone
                                </label>
                            </div>
                            <br></br>
                            <div>
                                <input type="checkbox"
                                    name="studyType"
                                    value="group" />
                                <label for="group">
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
                                    onChange = {this.handleChange}/>
                            </div>
                            <br></br>
                            <div className = "descriptionText">
                                <textarea 
                                    name = "description"
                                    style = {{width: "87%", height: "300px"} }/>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="buttonPlace">
                    <div>
                        <button className="buttons">Finish</button>
                    </div>
                    <br></br>
                    <div>
                        <button className="buttons">Return</button>
                    </div>
                </div>
            </div>

        );

    }
}

export default SessionDetails