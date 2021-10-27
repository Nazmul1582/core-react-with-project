import StudentList from "./StudnetList";

const ListRender = () => {
    const studentList = [
        {
            id: 1,
            name: "Tanvir", 
            age : 10
        },
        {
            id: 2,
            name: "Maruf", 
            age : 12
        },
        {
            id: 3,
            name: "Midul", 
            age : 13
        },
        {
            id: 4,
            name: "Rohan", 
            age : 11
        }        
    ]

    return (
        <div>
            <h1> All Students Information</h1>
            {studentList.map((ele, index) => (
                <div key = {ele.id}>
                    <StudentList info = {ele} ourClass = {index % 2 === 0 ? "container-blue" : "container-black"} />
                    <h2> ================================ </h2>
                </div>
            ))}
        </div>
    )
}
export default ListRender;








// const ListRender = () => {
//     const studentList = [
//         {
//             id: 1,
//             name: "Tanvir", 
//             age : 10
//         },
//         {
//             id: 2,
//             name: "Maruf", 
//             age : 12
//         },
//         {
//             id: 3,
//             name: "Midul", 
//             age : 13
//         },
//         {
//             id: 4,
//             name: "Rohan", 
//             age : 11
//         }        
//     ]
//     return (
//         <div>
//             {
//                 studentList.map((ele, index) => 
//                     <div key = {index} >
//                         <h2>ID : {ele.id}</h2>
//                         <h2>Name : {ele.name}</h2>
//                         <h2>Age : {ele.age}</h2>
//                         <h2> ================================= </h2>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// export default ListRender;