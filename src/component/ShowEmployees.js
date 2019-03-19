import React, { Component } from 'react';

class ShowEmployees extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:
                [
                    {
                        "id":1,
                        "name": "John Lennon",
                        "salary": 55000
                    },
                    {
                        "id":2,
                        "name": "Paul McCartney",
                        "salary": 55000
                    },
                    {
                        "id":3,
                        "name": "Goerge Harisson",
                        "salary": 55000
                    },
                    {
                        "id":4,
                        "name": "Ringgo Star",
                        "salary": 55000
                    }

                ]
        }

    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Show Employees</div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <tbody>
                            {this.state.data.map((employee, i) => <TableRow key = {i} data = {employee} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

class TableRow extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.salary}</td>
            </tr>
        );
    }
}

export default ShowEmployees;
