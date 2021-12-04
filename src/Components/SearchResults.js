import React from "react";
import {Link} from "react-router-dom";

class SearchResults extends React.Component {

    handleJoin() {
        console.log('clicked');
    }


    render() {
        let data = [{
            "room": "2.125",
            "Building": "JSMB Building"
        }, {
            "room": "2.125",
            "Building": "JSMB Building"
        },{
            "room": "2.125",
            "Building": "JSMB Building"
        },{
            "room": "2.125",
            "Building": "JSMB Building"
        },{
            "room": "2.125",
            "Building": "JSMB Building"
        },{
            "room": "2.125",
            "Building": "JSMB Building"
        },{
            "room": "2.125",
            "Building": "JSMB Building"
        },{
            "room": "2.125",
            "Building": "JSMB Building"
        },{
            "room": "2.125",
            "Building": "JSMB Building"
        }];
        return (
            <div className = "searchResults">
                <div className = "information">
                    <div>
                        <p>Available Spaces</p>
                    </div>
                    <div className = "tableSearch">
                        <input
                            type="search"
                            id="header-search"
                            placeholder="Search"
                            name="searchRoom"
                            style= {{width: "125%"}}
                        />
                    </div>
                    
                </div>
                <div className = "searchResultsTable">
                    <table className = "table">
                        <thead>
                            <tr>
                                <th>Room #</th>
                                <th>Building Details</th>
                                <th>Selection</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((item, index) => {
                                return(
                                    <tr key = {index}>
                                        <td>{item.room}</td>
                                        <td>{item.Building}</td>
                                        <td>
                                            <Link to="/session">
                                                <button className="buttons">Select Room</button>
                                            </Link>

                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
                <div>
                    <Link to="/">
                        <button className="buttons"
                                onClick={this.handleJoin}>
                            Return
                        </button>
                    </Link>

                </div>
            </div>

        );

    }
}

export default SearchResults