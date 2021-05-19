import React, {Component} from 'react';
import './Student.css';

import students from "../../data/student.json";
import subject from "../../data/subject.json";

class Student extends Component{
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      subjects: [],
    };
  }

  componentDidMount() {
    this.setState({ students: students, subjects: subject });
  }

  getSubject = (subjectID, subjects) => {
    let subject =  subjects.find(sub => {
      return sub.ID === subjectID
    });
    if(subject){
      return subject.Subject;
    }else{
      return "Subject not found";
    }
  }

  findAlternateStaff = (StaffID, teachers, SubjectID) => {
    let staff;

    //[TODO] : Avoid iterating whole object for finding out alternate teachers. Maybe rearraning json to sort descending based on role

    //Look for stand by professor for subject
    staff =  teachers.find(teacher => {
      return teacher.Present && teacher.Subject.includes(SubjectID) && teacher.Role === "Standby Professor";
    });

    //Cannot find Standby Professor, Look for Headmistress
    if (!staff){
      staff =  teachers.find(teacher => {
        return teacher.Present && teacher.Subject.includes(SubjectID) && teacher.Role === "Headmistress";
      });
    }
    //Cannot find Headmistress, Look for Headmaster
    if (!staff){
      staff =  teachers.find(teacher => {
        return teacher.Present && teacher.Subject.includes(SubjectID) && teacher.Role === "Headmaster";
      });
    }

    if(staff){
      return staff.StaffName;
    }else{
      return "Not Assigned";
    }
    
  }

  getStaff = (StaffID, teachers, SubjectID) => {
    if (StaffID === ""){//Case 1 : Staff is not assigned. Look for standby staff of same subject
      return this.findAlternateStaff(StaffID, teachers, SubjectID);
    }else{
      let substitute;
      substitute =  teachers.find(teacher => {
        return teacher.StaffID === StaffID && teacher.Present == true
      });
      if(substitute){
        return substitute.StaffName;
      }else{//Case 2 : Staff assigned is not available. Look for standby staff of same subject
        return this.findAlternateStaff(StaffID, teachers, SubjectID);
      }
    }
  }

  renderHeader = () => {
      let headerElement = ['Student', 'Subject', 'Teacher']

      return headerElement.map((key, index) => {
          return <th key={index}>{key}</th>
      })
  }

  renderBody = (teachers, students, subjects) => {
      return students && students.map(({ StudentID, StudentName, StaffID, SubjectID }) => {
          return (
              <tr key={StudentID}>
                  <td>{StudentName}</td>
                  <td>{this.getSubject(SubjectID, subjects)}</td>
                  <td>{this.getStaff(StaffID, teachers, SubjectID)}</td>
              </tr>
          )
      })
  }

  render() {
    return (
      <div>
        <h2>Current Schedule</h2>
        <p>Checkout what students are studying today:</p>
        <table id='student'>
            <thead>
                <tr>{this.renderHeader()}</tr>
            </thead>
            <tbody>
                {this.renderBody(this.props.teachers, this.state.students, this.state.subjects)}
            </tbody>
        </table>
      </div>
    )
  }

}

export default Student;
