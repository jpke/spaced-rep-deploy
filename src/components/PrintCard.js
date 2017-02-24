import React from 'react';

export default function(props) {

	return  <div>
				<div className='print-card'>
					<p className='light-side'>{props.card.question}</p>
					<p className='dark-side'>{props.card.answer}</p>
				</div>
			</div>

}
