import { react } from "@babel/types";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

class SessionDetails extends React.Component {

    render() {

        return (
            <div>
                <div className="Details">
                    <div className="sessionDetailsPreferences">
                        <p>Preferences</p>
                        <div className="sessionTextBox">
                            <div>
                                <input type="checkbox"
                                    name="studyType"
                                    value="alone"/>
                                <label for="alone">
                                     Study Alone
                                </label>
                            </div>
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