import './table.css'
const ShowInfo = ({info, ourClass, deleteStudentHandler}) => {
    return (
        <div>
            <table className = {ourClass}>
                <tbody>
                    <tr>
                        <td>{info.name}</td> 
                        <td>{info.id}</td>
                        <td>{info.age}</td> 
                        <td><button 
                        onClick = { () => deleteStudentHandler(info.id)}
                        >Yes</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ShowInfo;

// import React, {Component} from "react";
// import './table.css'
// class ShowInfo extends Component{
//     constructor(){
//         super();
//         this.state = {
//             name : "Next Topper"
//         }
//     }
//     deleteInfo = () => {
//         // this.setState({

//         // })
//         console.log("deleted")
//     }
//     render(){
//         const {info, ourClass} = this.props
//         return (
//             <div>
//                 <table className = {ourClass}>
//                     <tbody>
//                         <tr>
//                             <td>{info.name}</td> 
//                             <td>{info.id}</td>
//                             <td>{info.age}</td> 
//                             <td><button onClick = {this.deleteInfo}>Yes</button></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
// export default ShowInfo;