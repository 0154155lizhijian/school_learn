import * as React from 'react';
import {Header,About} from './components/members'

export const App:React.StatelessComponent<{}> =() => {
    return(
        <div className="container-fluid">
            <Header></Header>
            {/* <About></About> */}
        </div>
    )
}