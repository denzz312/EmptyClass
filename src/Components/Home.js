import React from "react";
import { FaUsers, FaSearch } from "react-icons/fa";

class Home extends React.Component{
 
    handleJoin(){
      console.log('clicked');
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
                         name="favorite_pet"
                         value="ev"/>
                </div>
                <div>
                  <label for="jmsb">JMSB Building</label>
                  <input type="checkbox"
                         name="favorite_pet"
                         value="jsmb"/>
                </div>

                <div>
                  <label for="hall">Hall Building</label>
                  <input type="checkbox"
                         name="favorite_pet"
                         value="hall"/>
                </div>
              </div>
              <br/>
              <div className="Form-container">
                  <div>
                    <div className="inputStyleLabel">
                      <label for="weekday">Choose Day</label>
                    </div>
                    <div>
                      <select id="weekday" name="weekday">
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
                      placeholder="HH:MM"
                      name="Start Time"
                      onChange={this.handleChange}
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
                      placeholder="HH:MM"
                      name="End Time"
                      onChange={this.handleChange}
                    />
                    </div>
                </div>
              </div>
              </div>
              <div>
                <button
                  className="buttons"
                  onClick={this.handleJoin}>
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
              onClick={this.handleJoin}>
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