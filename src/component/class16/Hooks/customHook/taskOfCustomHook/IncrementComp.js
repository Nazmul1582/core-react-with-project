import useIncrement from './useIncrement';
function IncrementComp(){
    const [count, bindCount] = useIncrement(0, 10)
    const [count2, bindCount2] = useIncrement(0, 50)
    return(
        <div>
            <h1>{count}</h1>
            <button {...bindCount} >increment</button>
            <h1> {count2} </h1>
            <button {...bindCount2} >increment</button>
        </div>
    )
}

export default IncrementComp;