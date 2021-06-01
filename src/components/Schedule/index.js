import React, { Component } from "react";
import Staff from "../Staff";
import Student from "../Student";
import teachers from "../../data/teachers.json";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    //State can be set by fetching json data from server side once implemented
    this.setState({ teachers: teachers });
  }

  updateState(sid, value) {
    
    const staffs = this.state.teachers;
    var staff =  staffs.find(item => {
        return item.StaffID == sid;
    });
    staff.Present = value;
    this.setState({
      teachers: staffs,
    });
  }

  render() {
    return (
      <div className="w3-row-padding">
        <div data-testid="left-pane" className="w3-half">
          <Staff teachers={this.state.teachers} updateStateProp={this.updateState} />
        </div>
        <div data-testid="right-pane" className="w3-half">
          <Student teachers={this.state.teachers} />
        </div>
      </div>
    );
  }
}

export default Schedule;
