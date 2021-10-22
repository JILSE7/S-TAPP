import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import LoadData from '../Views/LoadData';


import Main from '../Views/Main';
import Reports from '../Views/Reports';

const AppRouter = () => {
    return (
        <Router basename={process.env.PUBLIC_URL} >
            <div>
                <Switch>
                    <Route exact path ="/" component={Main}/>
                    <Route exact path ="/Reports" component={Reports}/>
                    <Route exact path ="/LR" component={LoadData}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter