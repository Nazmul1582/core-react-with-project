import React, { useEffect, useRef } from 'react';
import useInput from './useInput';

function LoginWithCustomHook (){
    const [mail, bindMail, resetMail] = useInput('', 'email');
    const [password, bindPassword, resetPassword] = useInput('', 'password');
    
    const mailRef = useRef(null);

    useEffect(() =>{
        mailRef.current.focus();
    }, [])

    const submitHandler = () => {
        console.log(mail, password);
        mailRef.current.focus();
        resetMail();
        resetPassword();
    }
    return(
        <div>
            <input ref={mailRef} {...bindMail} />
            <br/>
            <input {...bindPassword} />
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default LoginWithCustomHook;