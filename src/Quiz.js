import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Quiz extends Component {
  
  handleFormSubmit(e) {
    e.preventDefault();
    let isCorrect = (e.target.englishInput.value === this.props.question.answer) ? true : false;
    this.props.checkResponse(isCorrect)
    this.props.sendUserInput(this.props.question._id, isCorrect)
  }

  renderEwok() {
    let temp = [];
    let i = 0;
    for (i; i < this.props.numCorrect; i++) {
        temp.push(<img className='thugLife' key={i} src="http://overmental.com/wp-content/uploads/2015/06/Wicket-thug-life.jpg" />)
    }
    for (let j = 0; j < this.props.numIncorrect; j++) {
        temp.push(<img className='ewokLife' key={j + i} src="http://blog.officialstarwarscostumes.com/wp-content/uploads/2014/12/Ewok3.jpg" />)
    }
    return (
      <div>{temp}</div>
    )
  }

  handleClick() {
    this.props.logOut()
    this.props.router.replace('/')
  }

  componentWillMount() {
    this.props.fetchQuestion()
  }

  checkQuestion() {
    if (this.props.question === undefined) {
      return "loading..."
    } else  {
      return this.props.question.question
    }
  }

  render() {
    return  <div className='quiz'>
              <div>
                <button className='logout' onClick={this.handleClick.bind(this)}>Log Out</button>
              </div>
              <h1>Ewokese Quiz</h1>
              <div className="question-card"> 
                  <div className='ewok-meaning'>
                    <h3><span className='word-meaning'>Ewok:</span> {this.checkQuestion()}</h3>
                  </div>
                  <h3 className='word-meaning'>English:</h3>
                  <form onSubmit={this.handleFormSubmit.bind(this)}>
                  <input type="text" name="englishInput" placeholder="english meaning" />
                  </form>
                  {this.renderEwok()}
              </div>
            </div>
  }
}

function mapStateToProps(state) {
  console.log('STATE::', state)
  return {
    question: state.questions[0],
    numCorrect: state.numCorrect,
    numIncorrect: state.numIncorrect
  }
}

export default connect(mapStateToProps, actions)(Quiz)