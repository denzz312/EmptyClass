import React from "react";
import { FaUsers, FaSearch } from "react-icons/fa";
import Data from "./compieddata.json";

class Home extends React.Component{

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
 

    handleDay = (event) =>{
      this.setState({day: event});
    }

    handleStart = (event) =>{
      this.setState({startTime: event.target.value});
    }
    
    handleEnd = (event) =>{
      this.setState({endTime: event.target.value});
    }
    
    handleSearch = (e) =>{
      e.preventDefault();
      
      {Data.map(post => {

        let classList = post.H;
        let searchList = [];
        
        this.state.startTime = this.state.startTime.replace(":",'');
        let sTime = this.state.startTime;
        if(sTime.charAt(0) == '0'){
           sTime = sTime.slice(1);
        }
        
        this.state.endTime = this.state.endTime.replace(":",'');
        let eTime = this.state.endTime;
        if(eTime.charAt(0) == '0'){
          eTime = eTime.slice(1);
        }

        //this should be the loop to finish this
        for(var i = 0; i < 1271; i++){
          if(classList[i] != null){
            console.log(i);
           for(var j = 0; j < 10; j++){
            //this should allow only days that have free time be be added into list
            if((classList[i][this.state.day][j] != null) ||
            (classList[i][this.state.day][j] != undefined)){
              
              //adjust value of schedule start to be calculated
              let scStart = classList[i][this.state.day][j][0].replace(".00","");
              scStart = scStart.replace(".","");
              if(scStart.charAt(0) == '0'){
                scStart = scStart.slice(1);
              }

              //adjust value of schedule end to be calculated
              let scEnd = classList[i][this.state.day][j][1].replace(".00","");
              scEnd = scEnd.replace(".","");
              if(scEnd.charAt(0) == '0'){
                scEnd = scEnd.slice(1);
              }

              //add room number to list to pass to SearchResults
              if(parseInt(sTime) >= parseInt(scStart) &&
                 parseInt(eTime) <= parseInt(scEnd)){
                   console.log("works")
                 console.log(scStart);
                 console.log(scEnd);
                 searchList.push(i);
                 console.log(searchList);
                }
            }
           }
          }
        }

       return(
        <>
{/*         
       <h3>Start</h3><h2>{start}</h2>
       <h3>End</h3><h2>{end}</h2>
       <h2>{array}</h2> */}

        </>
     )}
     )
    }

    }

    handleJoin = (e) =>{
      
    }

    render(){
    
    return(
        <div>
            <form className="formDivider">
              <div className="orderForms">
              <div className="Form-container-checkbox">
                <div>
                  <label for="ev">EV Building</label>
                  <input type="checkbox"
                         name="ev"
                         disabled/>
                </div>
                <div>
                  <label for="jmsb">JMSB Building</label>
                  <input type="checkbox"
                         name="jmsb"
                         disabled/>
                </div>

                <div>
                  <label for="hall">Hall Building</label>
                  <input type="checkbox"
                         name="hall"
                         checked/>
                </div>
              </div>
              <br/>
              <div className="Form-container">
                  <div>
                    <div className="inputStyleLabel">
                      <label for="weekday">Choose Day</label>
                    </div>
                    <div>
                      <select id="weekday" name="weekday" onSelect={this.handleDay}>
                        <option value="monday" selected>monday</option>
                        <option value="tuesday">tuesday</option>
                        <option value="wednesday" >wednesday</option>
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
                <button
                  className="buttons"
                  onClick={this.handleSearch}
                  >
                  Search
                  &nbsp;
                  <FaSearch/>
                </button>
              </div>
            </form>
          <br/>
          <div>
            -or-
          </div>
          <br/>
          <div>
            <button
              className="buttons"
              onClick={this.handleJoin}
              >
              Join Others
              &nbsp;
              <FaUsers/>
            </button>
          </div>
          </div>
    );
    
    }
}

export default Home