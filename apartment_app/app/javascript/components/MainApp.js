import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/Header'

class MainApp extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <React.Fragment>
        <Header />
           {logged_in &&
              <button type="button" class="btn btn-outline-secondary">
                <a href={sign_out_route}>Sign Out</a>
              </button>
            }
          {!logged_in &&
              <button type="button" class="btn btn-outline-secondary">
                <a href={sign_in_route}>Sign In</a>
              </button>
            }
      </React.Fragment>
    );
  }
}

export default MainApp
