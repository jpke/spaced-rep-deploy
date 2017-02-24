import React, { Component } from 'react';

export default class CardPage extends Component {

	constructor(props) {
		super(props)

		this.state = {
			"side": "question"
		}
	}

	onClickWord () {
		if (this.state.side === 'question') {
			this.setState({'side': 'answer'})
		} else {
			this.setState({'side': 'question'})
		}
	}

	render() {
		return  <div>
							<div className='study-card'>
								<p onClick={this.onClickWord.bind(this)}>
									{this.props.card[this.state.side]}
								</p>
							</div>
						</div>
	}
}
