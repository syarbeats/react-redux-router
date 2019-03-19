import React from 'react';

class HeaderMenu extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/showEmployees">Show Employees</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/editEmployee">Edit Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/insertEmployee">Insert Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/deleteEmployee">Delete Employee</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderMenu;