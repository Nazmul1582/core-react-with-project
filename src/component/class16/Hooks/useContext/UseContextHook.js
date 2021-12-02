import React,{ useContext } from 'react';
import ThemeContext from './Context/Product';
import UserContext from './Context/User';
function UseContextHook () {
    const {user} = useContext(UserContext);
    const theme = useContext(ThemeContext)
    return(
        <div>
            <h3>Use Context Hook</h3>
            <h1>{user} - {theme}</h1>
        </div>
    )
}
export default UseContextHook;