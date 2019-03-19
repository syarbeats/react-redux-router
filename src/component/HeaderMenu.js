import React from 'react';

class HeaderMenu extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <button type="button" className="btn btn-primary">Home</button><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/showEmployees">
                                    <button type="button" className="btn btn-secondary">Show Employees</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/editEmployee">
                                    <button type="button" className="btn btn-success">Edit Employee</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/insertEmployee">
                                    <button type="button" className="btn btn-info">Insert Employee</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/deleteEmployee">
                                    <button type="button" className="btn btn-warning">Delete Employee</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderMenu;