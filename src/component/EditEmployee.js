import React from 'react';

function EditEmployee() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Search Employee</div>
                        <div className="card-body">
                            <form className="form-horizontal" action="#" method="post">
                                <div className="form-group">
                                    <label className="control-label col-sm-2" htmlFor="name">Employee ID:</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Enter employee Id" name="id"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-info">Find Employee</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{'margin-top': '20px'}}>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Edit Employee</div>
                        <div className="card-body">
                            <div className="row" style={{'margin-top': '20px'}}>
                                <div className="col-md-12">
                                    <h2>Edit Existing Employee</h2>
                                    <form className="form-horizontal" action="#" method="post">
                                        <div className="form-group">
                                            <label className="control-label col-sm-2" htmlFor="id">ID:</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" placeholder="Enter employee id" name="id"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-2" htmlFor="name">NAME:</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" placeholder="Enter employee name" name="name" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="control-label col-sm-2" htmlFor="salary">SALARY:</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" placeholder="Enter employee salary" name="salary"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button type="submit" className="btn btn-info">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditEmployee;