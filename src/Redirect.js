import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from './actions.js';
import { connect } from 'react-redux';
import Landing from './Landing'

// const URL = "http://localhost:3000"

class Redirect extends Component {
  componentWillMount() {
    console.log("PARAMS", this.props.location.search)
    if(this.props.location.search) {
      console.log("this is running")
      this.props.loggedIn(this.props.location.search.split("?")[1])
    }
  }
  componentDidMount() {
    // setTimeout(this.props.router.replace('/'), 500)
  }
  render() {
    return null
  }
}

function mapStateToProps(state) {
  return {
    accessToken: state.accessToken
  }
}

export default connect(mapStateToProps, actions)(Redirect)