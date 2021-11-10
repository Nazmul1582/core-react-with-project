import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import ShowColor from './ShowColor';
class ParentComponent extends Component{
    render(){
        return(
            <div>
                <h1>From Parent Component </h1>
                <ErrorBoundary>
                    <ShowColor color="Green" />
                </ErrorBoundary>

                <ErrorBoundary>
                    <ShowColor color="Red" />
                </ErrorBoundary>

                <ErrorBoundary>
                    <ShowColor color="Black" />
                </ErrorBoundary>
            </div>
        )
    }
}
export default ParentComponent;