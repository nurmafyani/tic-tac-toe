import { DRAW_X, DRAW_Y } from '../helpers/actionTypes'

export function draeXAction(cell) {
	return {
		type: DRAW_X,
		cell
	}
}


export function draeYAction(cell) {
	return {
		type: DRAW_Y,
		cell
	}
}