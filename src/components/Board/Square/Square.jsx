import React from 'react';
import { connect } from 'react-redux';

import Cross from './Cross/Cross.jsx';
import Zero from './Zero/Zero.jsx';
import { drawXAction, drawOAction } from '../../../actions/boardAction.js';
import { toggleTurnAction } from '../../../actions/playerAction.js';

function Square(props) {
	const { index, symbol, draw, players } = props
	const disabled = symbol ? 'disabled' : ''
	return <div className={ 'cell '+disabled } onClick={() => draw(players, index)}>
	{symbol ? (symbol === 'X' ? <Cross/> : <Zero/>) : ''}
	</div>
}

const mapStateToProps = ({ players }) => ({ players })

const mapDispatchToProps = dispatch => ({
	draw: (players, cellIndex) => {
		if(players[players.turn] === 'X') {
			dispatch(drawXAction(cellIndex))
		} else {
			dispatch(drawOAction(cellIndex))
		}
		
		dispatch(toggleTurnAction())
		
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)