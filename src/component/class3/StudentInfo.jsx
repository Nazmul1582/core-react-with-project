
const StudentInfo = ({name, age}) => {
    const showNameHandler = (n) => {
        console.log(name, age, n)
    }
    return (
        <div>
            <h1>Student information</h1>
            <h3>Name : {name} </h3>
            <h3>Age : {age} </h3>
            <button onClick = {() => showNameHandler(16546851)}>Show in console</button>
        </div>
    )
}
export default StudentInfo;