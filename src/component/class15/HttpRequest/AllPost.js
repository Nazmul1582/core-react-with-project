import React, { Component } from 'react';
import axios from 'axios'
import CreatePost from './CreatePost';
class AllPost extends Component{
    constructor(){
        super();
        this.state = {
            allPosts : [],
            allStudents: []
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                // console.log('reasult = ', res);
                this.setState({
                    allPosts: res.data
                })
            })
            .catch( error => console.log(error))
    }
    // getPostHandler = async() => {
    //     let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //     this.setState({
    //         allPosts: res.data
    //     })
    // }
    render(){
        return (
            <div>
                <h1>All Posts </h1>
                <CreatePost />
                {/* <button onClick={this.getPostHandler}>View Posts</button> */}
                {
                    !!this.state.allPosts.length ? 
                    <div>
                        {
                            this.state.allPosts.map(ele => {
                                return( 
                                    <div key={ele.id}>
                                        <p>ID: {ele.id}</p>
                                        <p>Title: {ele.title}</p>
                                        <p>================================</p>
                                    </div>
                                )
                            })
                        }
                    </div> : 
                    <h1>Lodding ............... </h1>
                }
            </div>
        )
    }
}
export default AllPost;