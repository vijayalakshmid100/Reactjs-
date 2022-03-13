import React, { Component } from 'react'
import EmployeeService from './EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: this.props.match.params.empId,
            // empId: '',
            // name: '',
            // email: '',
            // phoneNo: '',
            employee: {}
        }
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.empId).then(res => {
            this.setState({ employee: res.data });
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center" class="card"> View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee Id: </label>
                            <div> {this.employee.empId}</div>
                        </div>
                        <div className="row">
                            <label> Employee name: </label>
                            <div> {this.state.employee.name}</div>
                        </div>
                        <div className="row">
                            <label> Employee Phone Number: </label>
                            <div> {this.state.employee.phoneNo}</div>
                        </div>
                        <div className="row">
                            <label> Employee Email ID: </label>
                            <div> {this.state.employee.email}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent;