import './style.css';
const StudentList = ({info, ourClass}) => {
    return(
        <div className = {ourClass}>
            {
                <div key = {info.id}>
                    <h2>ID : {info.id} -- Name : {info.name} -- Age : {info.age}</h2>
                </div>
            }
        </div>
    )
}

export default StudentList;