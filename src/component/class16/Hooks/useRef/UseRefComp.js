import React, { useEffect, useRef, useState } from 'react';
function UseRefComp(){
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const mailRef = useRef(null);
    useEffect(()=> {
        mailRef.current.focus()
    }, [])

    const submitHandler = () => {
        console.log(mail, password);
        mailRef.current.focus();
        setMail('');
        setPassword('');
    } 
    return(
        <div>
            <input ref={mailRef} type='text' value={mail} 
            onChange={(e)=> setMail(e.target.value)} />
            <br />
            <input type='password' value={password} 
            onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}
export default UseRefComp;