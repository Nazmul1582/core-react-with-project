import React from 'react';
import { ThemeConsumer } from './Context/Product';
import { UserConsumer } from './Context/User';

class ChildAComp extends React.Component{
    render(){
        return(
            <div>
                <h3>Child A Component</h3>
                <UserConsumer>
                    {
                        ({user}) => (
                            <ThemeConsumer>
                                {
                                    (theme) => (
                                        <div>
                                            <h1> User is {user}</h1>
                                            <h1>Theme name is {theme}</h1>
                                        </div>
                                    )
                                }
                            </ThemeConsumer>
                        )
                    }
                </UserConsumer>
            </div>
        )
    }
}
export default ChildAComp;