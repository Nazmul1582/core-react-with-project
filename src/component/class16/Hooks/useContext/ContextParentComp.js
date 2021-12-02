import React from 'react';
import ChildAComp from './ChildAComp'
import { ThemeProvider } from './Context/Product'
import { UserProvider } from './Context/User'
import UseContextHook from './UseContextHook';
class ContextParentComp extends React.Component{
    render(){
        return(
            <UserProvider value={{user:"admin", isAdmin: false}}>
                <ThemeProvider value='dark'>
                    <ChildAComp />
                    <UseContextHook />
                </ThemeProvider>
            </UserProvider>
        )
    }
}
export default ContextParentComp;