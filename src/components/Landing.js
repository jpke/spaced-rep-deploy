import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions/actions.js';
import { connect } from 'react-redux';

// const AUTH_URL = "http://localhost:3090/auth/google/"
const AUTH_URL = "https://intense-wildwood-92655.herokuapp.com/auth/google"

class Landing extends Component {
	handleOnClick() {
		window.location.href=AUTH_URL
	}

	componentWillMount() {
    if(this.props.location.search) {
      this.props.loggedIn(this.props.location.search.split("?")[1])
    }
	}

	render() {
    return <div className='landing'>
							<h1>Learn Ewokese</h1>
							<img className='ewok-friend' src='https://raw.githubusercontent.com/jpke/spaced-rep-deploy/master/ewokAndChild.jpeg' alt="ewok and friend"/>
							<div>
								<h2>A long time ago in a galaxy far, far away... </h2>
					      <h3>Ewoks existed. Learn to speak Ewokese!</h3>
							</div>
							<div className="nav">

								{this.props.isLoggedIn ?
									<div className="nav-buttons">
										<div className="link-box quizLink"><Link className='quiz-link' to="quiz">Go To Quiz</Link></div>
										<div className="link-box"><Link className='card-link' to="/study-cards">Go To Study Page</Link></div>
										<div className="link-box"><Link className='card-link' to="/print-cards">Print Flash Cards</Link></div>
									</div>
								:
									<button onClick={this.handleOnClick.bind(this)}>Login through Google</button>
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
