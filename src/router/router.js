import React from 'react' ;
import { BrowserRouter as Router, Route } from "react-router-dom";
import InsertEmployee  from '../component/InsertEmployee';
import DeleteEmployee  from '../component/DeleteEmployee';
import EditEmployee  from '../component/EditEmployee';
import Index from '../component/Index';
import ShowEmployees  from '../component/ShowEmployees';

function AppRouter() {
    return (
        <Router>
            <div>
                <Route path="/" exact component = {Index} />
                <Route path="/showEmployees" exact component = { ShowEmployees } />
                <Route path="/editEmployee" exact component = {EditEmployee} />
                <Route path="/insertEmployee" exact component = {InsertEmployee} />
                <Route path="/deleteEmployee" exact component = {DeleteEmployee} />
            </div>
        </Router>
    );
}

export default AppRouter;