import React from "react";
import {Link} from "react-router-dom";
import Data from "./compieddata.json";

class SearchResults extends React.Component {

    constructor(props) {

        super();
        if(!props.location.state){

            props.history.push("/");
            return;
        }
        this.state = {
            ...props.location.state,
            searchData: []
        }

        this.searchResult();
    }

    handleJoin(item) {
        console.log(item);
        this.props.history.push({
            pathname: "session",
            state:{
                ...item
            }
        })
    }

    searchResult() {
        Data.map(post => {

                let classList = post.H;
                let searchList = [];

                this.state.startTime = this.state.startTime.replace(":", '');
                let sTime = this.state.startTime;
                if (sTime.charAt(0) == '0') {
                    sTime = sTime.slice(1);
                }

                this.state.endTime = this.state.endTime.replace(":", '');
                let eTime = this.state.endTime;
                if (eTime.charAt(0) == '0') {
                    eTime = eTime.slice(1);
                }

                //this should be the loop to finish this
                for (var i = 0; i < 1271; i++) {
                    if (classList[i] != null) {
                        // console.log(i);

                        if (classList[i][this.state.day] == null) {

                        } else {

                            for (var j = 0; j < 10; j++) {
                                //this should allow only days that have free time be be added into list
                                if ((classList[i][this.state.day][j] != null) &&
                                    (classList[i][this.state.day][j] != undefined)) {

                                    //adjust value of schedule start to be calculated
                                    let scStart = classList[i][this.state.day][j][0].replace(".00", "");
                                    scStart = scStart.replace(".", "");
                                    if (scStart.charAt(0) == '0') {
                                        scStart = scStart.slice(1);
                                    }

                                    //adjust value of schedule end to be calculated
                                    let scEnd = classList[i][this.state.day][j][1].replace(".00", "");
                                    scEnd = scEnd.replace(".", "");
                                    if (scEnd.charAt(0) == '0') {
                                        scEnd = scEnd.slice(1);
                                    }

                                    //add room number to list to pass to SearchResults
                                    if (parseInt(sTime) >= parseInt(scStart) &&
                                        parseInt(eTime) <= parseInt(scEnd)) {
                                        console.log(i, "works")
                                        searchList.push({
                                            room: i,
                                            time: sTime + " - " + eTime
                                        });
                                    }
                                }
                            }

                        }

                    }
                }

                this.state.searchData = searchList;
                console.log(searchList)

            }
        )


    }

    render() {
        if(!this.props.location.state){

            this.props.history.push("/");
            return <></>;
        }
        return (
            <div className="searchResults">
                <div className="information">
                    <div className="titleSpaces">
                        Available Spaces
                    </div>
                    <div className="tableSearch">
                        <input
                            type="search"
                            id="header-search"
                            placeholder="Search"
                            name="searchRoom"
                        />
                    </div>

                </div>
                <div className="formDivider2">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Room #</th>
                            <th>Building Details</th>
                            <th>Join Here</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.searchData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.room}</td>
                                        <td className="arrangeTableLeft">Hall Building</td>
                                        <td>

                                                <button className="buttons" onClick={()=>{
                                                    this.handleJoin(item)
                                                }}>Select Room</button>

                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
                <br/>
                <div>
                    <Link to="/">
                        <button className="buttons">
                            Return
                        </button>
                    </Link>

                </div>
            </div>

        );

    }
}

export default SearchResults