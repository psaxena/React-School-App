import React, {Component} from 'react';

import './Staff.css';

class Staff extends Component{
  constructor(props) {
    super(props);
  }

  onFieldChange(e) {
      this.props.updateStateProp( e.target.name, e.target.checked);
  }

  renderHeader = () => {
      let headerElement = ['Name', 'Present']

      return headerElement.map((key, index) => {
          return <th key={index}>{key}</th>
      })
  }

  renderBody = (teachers) => {
      
      return teachers && teachers.map(({ StaffID, StaffName, Present }) => {
          return (
              <tr key={StaffID}>
                  <td>{StaffName}</td>
                  <td style={{verticalAlign: "middle"}}>
                    <input type="checkbox" name={StaffID} defaultChecked={Present ? 'checked' : false} onChange={this.onFieldChange.bind(this)} />
                  </td>
              </tr>
          )
      })
  }

  render() {
    return (
      <div>
        <h2>Attendance</h2>
        <p>Here are the Teachers available today:</p>
        <table id='employee'>
            <thead>
                <tr>{this.renderHeader()}</tr>
            </thead>
            <tbody>
                {this.renderBody(this.props.teachers)}
            </tbody>
        </table>
      </div>
    )
  }

}

export default Staff;
