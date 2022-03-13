import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
// import $ from 'jquery';
import '../App'


class ListEmployeeComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            empId: '',
            name: '',
            email: '',
            phoneNo: '',

            posts: [],

        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/infy')
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(response.data)
            })


    }


    deleteEmployee(empId, e) {
        axios.delete('http://localhost:8000/infy/del/' + empId).then((res) => {
            console.log(res);
            alert('Employee deleted successfully');
        },
            (error) => {
                console.log(error);
            })
    }

    render() {
        const { posts } = this.state
        return (
            <div >
                <h2 className="text-center">Employees List</h2>

                <div class="form-group">
                </div>
                <br></br>
                <div class="container">
                    <div >
                        <table className="table table-striped table-bordered">

                            <thead class="thead-dark">
                                <tr>
                                    <th> Employee Id</th>
                                    <th> Employee Name</th>

                                    <th> Employee Phone number</th>
                                    <th> Employee Email Id</th>
                                    <th> Edit</th>

                                </tr>
                            </thead>
                            <tbody id="myTable">
                                {
                                    this.state.posts.map(
                                        post =>
                                            <tr key={post.empId}>
                                                <td> {post.empId} </td>
                                                <td> {post.Mobile} </td>
                                                
                                                <td>
                                                    <Link class="btn btn-info active" variant="info" to={"/update-employee/:id"}>Update</Link> &nbsp;
                                                    {/* <Link variant="info" to={"/view-employee"}>View</Link> */}
                                                    <button className="btn btn-info" style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(post.empId)} >View <i class='far fa-eye'></i></button> &nbsp;
                                                    {/* <Link to={`/employee/${post.empId}`}><button className="btn btn-dark">View</button></Link> */}
                                                    <button className="btn btn-danger" onClick={(e) => this.deleteEmployee(post.empId, e)}>Delete</button>

                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <Link class="btn btn-primary active" variant="info" to={"/add-employee/:id"}>Add Employee</Link>
                        </table>


                    </div>

                </div>
            </div>
        )
    }

}

export default ListEmployeeComponent;