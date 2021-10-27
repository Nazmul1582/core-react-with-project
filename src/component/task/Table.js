import React, {Component} from "react";
import ShowInfo from './ShowInfo';
import { studentInfo } from "./StudentInfo";
import './table.css';

class Table extends Component {
    constructor(){
        super();
        this.state = {
            allStudents : studentInfo
        }
    }
    deleteStudentHandler = (id) => {
        this.setState({
            allStudents : this.state.allStudents.filter(std => 
                std.id !== id
            )
        })
        
        console.log('Deleted id is ', id)
    }
    render(){
        const {allStudents} = this.state
        return (
            <div>
                <h1>Student Information</h1>
                <table className = "heading">
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Name</td> 
                            <td>Age</td> 
                            <td>Delete</td>
                        </tr>
                    </tbody>
                </table>
                {
                    allStudents.map((ele, index) => (
                        <div key = {ele.id}>
                            <ShowInfo deleteStudentHandler = {this.deleteStudentHandler} 
                            info = {ele} 
                            ourClass = {index % 2 === 0 ? "container1" : "container2"}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Table;