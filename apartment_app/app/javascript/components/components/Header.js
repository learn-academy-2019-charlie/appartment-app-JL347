import React from "react"
import {
  Col, 
  Container, 
  Row
} from 'react-bootstrap'


class Header extends React.Component {
  render () {
       const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">AptApp</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
    
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    
                  <li class="nav-item">
                    <a class="nav-link" href="#">Apartments List</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" href="#">Create New Apartment</a>
                  </li>
          
                  <li class="nav-item">
                    <a class="nav-link" href="#">My Apartments</a>
                  </li>
        </ul>
        
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        
      </div>
    </nav>
    );
  }
}

export default Header;