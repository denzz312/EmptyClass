import React from "react";

class SearchResults extends React.Component {

    handleJoin() {
        console.log('clicked');
    }

    render() {

        return (
            <div>
                <div>
                    Available Spaces
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search"
                        name="s"
                    />
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Room #</th>
                                <th>Building Details</th>
                                <th>Selection</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>2.125</th>
                                <th>JMSB Building</th>
                                <th>
                                    <button>Select Room</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className="ReturnButton"
                        onClick={this.handleJoin}>
                        Return
                    </button>
                </div>
            </div>

        );

    }
}

export default SearchResults