import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ListEmployeeComponent from './component/ListEmployeeComponent';

class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="#" className="navbar-brand">Employee Management</a></div>
          </nav>
        </header>
       

      </React.Fragment>
    )
  }
}

export default HeaderComponent;