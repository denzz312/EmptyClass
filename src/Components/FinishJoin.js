import React from "react";

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
            <div>
                {this.state.subject}
                {this.state.room}
                {this.state.note}
            </div>

        );

    }

}