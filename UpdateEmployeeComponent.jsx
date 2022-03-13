import React, { Component } from 'react';
import axios from "axios";


class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: '',
            name: '',
            email: '',
            phoneNo: ''

        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //to display on console

    handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/infy/employees', this.state)
            .then(response => {

                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const { empId, name, phoneNo, email } = this.state
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                // this.getTitle()
                            }
                            <div className="card-body">
                                <form class="form-horizontal" onSubmit={this.handleSubmit}>
                                    <h2>Update Employee</h2>

                                    <div className="form-group">
                                        <label>Enter Employee Id: </label>
                                        <input placeholder="Id" name="empId" className="form-control" value={empId} onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Enter Name: </label>
                                        <input placeholder="Name" name="name" className="form-control" value={name} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Phone Number: </label>
                                        <input placeholder="Phone Number" name="phoneNo" className="form-control" value={phoneNo} onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Enter Email Id: </label>
                                        <input placeholder="Email Address" name="email" className="form-control" value={email} onChange={this.handleChange} />
                                    </div>

                                    <button class="btn btn-info" type="button" onClick={this.handleSubmit} >Submit</button>


                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent;