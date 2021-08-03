import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Square from './Square/Square.jsx';
import Summary from './Summary/Summary.jsx';

function Board(props) {
	const { board } = props

	return (
		<Fragment>
		<div id="Board" className="mt-4 d-flex flex-wrap">
		{
			board.map((symbol, i)=><Square key={i} index={i} symbol={symbol}/>)
		}
		</div>
		<div>
			<Summary/>
		</div>
		
		</Fragment>

	)
}

export default connect(({ board })=> ({ board }))(Board)