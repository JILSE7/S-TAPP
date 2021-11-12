import React from 'react';
//VIEWS
import LoadData from '../Views/LoadData';
import Reports from '../Views/Reports';
import Main from '../Views/Main';

//ROUTER
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';



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

export default AppRouter;