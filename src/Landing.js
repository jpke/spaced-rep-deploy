import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from './actions.js';
import { connect } from 'react-redux';
import cookie from 'react-cookie'

// const AUTH_URL = "http://localhost:3090/auth/google/"
const AUTH_URL = "https://intense-wildwood-92655.herokuapp.com/auth/google"

class Landing extends Component {
	handleOnClick() {
		window.location.href=AUTH_URL
	}

	componentWillMount() {
    console.log("PARAMS", this.props.location.search)
    console.log("LOCALSTORAGE:", localStorage.getItem('token'))
    if(this.props.location.search) {
      console.log("this is running")
      this.props.loggedIn(this.props.location.search.split("?")[1])
    }
	}
	
	render() {
    return <div className='landing'>
				<h1>Learn Ewokese</h1>
				<img className='ewok-friend' src='https://s.yimg.com/ny/api/res/1.2/8.rPRiBdkjRF2AlaQP_.0w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/http://36.media.tumblr.com/e19520d819ed6bf57dfe8a170858fb6c/tumblr_inline_nzeqzxNTTk1t0ijhl_1280.jpg' />
				<h2>A long time ago in a galaxy far, far away... </h2>
	       		<h3>Ewoks existed. Learn to speak Ewokese!</h3>
				<div className='quiz-margin'>
					{
						this.props.isLoggedIn ? <Link className='quiz-link' to="quiz">Go To Quiz</Link> : 
						<button onClick={this.handleOnClick.bind(this)}>Login through Google</button> 
	       			}
				</div>
				<div>
	       			{
						this.props.isLoggedIn ? <Link className='card-link' to="/study-cards">Go To Study Page</Link> : "" 
	       			}
	       			{
						this.props.isLoggedIn ? <Link className='card-link' to="/print-cards">Print Flash Cards</Link> : "" 
	       			}
	       		</div>
           </div>
  }
}

function mapStateToProps(state) {
	return {
		isLoggedIn : state.isLoggedIn
	}
}

export default connect(mapStateToProps, actions)(Landing);