import React from "react";
import {Next} from "react-bootstrap/esm/PageItem";
import {FaUsers, FaSearch} from "react-icons/fa";
import {Link, BrowserRouter as Router, Route} from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            day: "monday",
            startTime: "07:00",
            endTime: "08:00",
            searchData: [],
        };

        this.handleDay = this.handleDay.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }


    handleDay = (event) => {
        this.setState({day: event});
    }

    handleStart = (event) => {
        this.setState({startTime: event.target.value});
    }

    handleEnd = (event) => {
        this.setState({endTime: event.target.value});
    }

    handleSearch = function (e) {
        e.preventDefault();

        // jump to result page
        this.props.history.push({
            pathname: "/search",
            state: {
                day: this.state.day,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
            }
        })



    }

    handleJoin = (e) => {

    }

    render() {

        return (
            <div>
                <form className="formDivider">
                    <div className="orderForms">
                        <div className="Form-container-checkbox">
                            <div>
                                <label htmlFor="jmsb">EV Building</label>
                                <input type="checkbox"
                                       name="ev"
                                       defaultChecked={false}
                                       disabled={true}
                                />
                            </div>
                            <div>
                                <label htmlFor="jmsb">JMSB Building</label>
                                <input type="checkbox"
                                       name="jmsb"
                                       disabled={true}
                                       defaultChecked={false}/>
                            </div>

                            <div>
                                <label htmlFor="jmsb">Hall Building</label>
                                <input type="checkbox"
                                       name="hall"
                                       defaultChecked={true}/>
                            </div>
                        </div>
                        <br/>
                        <div className="Form-container">
                            <div>
                                <div className="inputStyleLabel">
                                    <label htmlFor="jmsb">Choose Day</label>
                                </div>
                                <div>
                                    <select id="weekday" name="weekday" defaultValue={"monday"}
                                            onSelect={this.handleDay}>
                                        <option value="monday">monday</option>
                                        <option value="tuesday">tuesday</option>
                                        <option value="wednesday">wednesday</option>
                                        <option value="thursday">thursday</option>
                                        <option value="friday">friday</option>
                                    </select>
                                </div>
                            </div>
                            &nbsp;
                            <div>
                                <div className="inputStyleLabel">
                                    <label>
                                        Start Time
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="inputStyle"
                                        type="text"
                                        placeholder="07:15"
                                        name="Start Time"
                                        value={this.state.startTime}
                                        onChange={this.handleStart}
                                    />
                                </div>
                            </div>
                            &nbsp;
                            <div>
                                <div className="inputStyleLabel">
                                    <label>
                                        End Time
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className="inputStyle"
                                        type="text"
                                        placeholder="08:30"
                                        name="End Time"
                                        value={this.state.endTime}
                                        onChange={this.handleEnd}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/search">
                            <button
                                className="buttons"
                                onClick={this.handleSearch}
                            >
                                Search
                                &nbsp;
                                <FaSearch/>
                            </button>
                        </Link>

                    </div>
                </form>
                <br/>
                <div>
                    -or-
                </div>
                <br/>
                <div>

                    <Link to="/join">
                        <button
                            className="buttons"
                            onClick={this.handleJoin}
                        >
                            Join Others
                            &nbsp;
                            <FaUsers/>
                        </button>
                    </Link>

                </div>
            </div>
        );

    }
}

export default Home