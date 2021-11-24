import React, { Component } from 'react';
import axios from 'axios'
class AllStudent extends Component{
    constructor(){
        super();
        this.state = {
            allStudents: []
        }
    }
    getStudentsHandler = async() => {
        let res = await axios.get('http://localhost:5000/admin/view-all-student');
        this.setState({
            allStudents : res.data.student
        })
        console.log(res.data.student)
    }
    render(){
        return (
            <div>
                <h1>All Students Info</h1>
                <button onClick={this.getStudentsHandler}> View Students </button>
                {
                    !!this.state.allStudents.length ? this.state.allStudents.map(ele => (
                        <div key={ele._id}>
                            <h1>Name : {ele.name}</h1>
                            <h1>Class : {ele.class}</h1>
                            <h1>Age : {ele.age}</h1>
                            <p>===========================</p>
                        </div>
                    ))
                    :
                    <h1>Lodding .............. </h1>
                }
            </div>
        )
    }
}
export default AllStudent;