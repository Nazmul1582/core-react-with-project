// Error handling phase method

// 1. static getDerivedStateFromError()
// 2. componentDidCatch(err, info)

const ShowColor = ({color}) => {
    if(color === 'Black'){
        throw new Error('This is not a valid color')
    }
    return(
        <div>
            <h1>Color is : {color}</h1>
        </div>
    )
}

export default ShowColor;