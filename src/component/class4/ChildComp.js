const ChildComp = ({changeNameHandler}) => {
    return (
        <div>
            <h1 style = {{color: "coral"}}>I am from Child Component</h1>
            <button onClick = {() => changeNameHandler("Yeamin") } 
            style = {{background: "#00956b", color: "#fff", padding : "10px 20px", borderRadius: "5px", border : "1px solid #00956b",fontSize: "18px", cursor: "pointer"}}
            >Change Name</button>
        </div>
    )
}

export default ChildComp;