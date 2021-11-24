import React, { Component } from 'react';
import axios from 'axios'
class CreatePost extends Component{
    constructor(){
        super();
        this.state = {
            id : "1",
            title: "Hello Bangladesh",
            body: 'welcome  to ldfkasj ljwepori psoidjosdkf 3on  OJR 2HDOICF',
            age: 23,
            // parent =============
            father: "Mr. A",
            mother: "Mr. B"
        }
    }
    createPostHandler = () => {
        const { id, title, body, age, father, mother } = this.state;
        const parent = {
            father, 
            mother
        }
        const data = {
            id, 
            title,
            body,
            age, 
            parent
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    render(){
        return (
            <div>
                <button onClick={this.createPostHandler}> Submit</button>
            </div>
        )
    }
}
export default CreatePost;