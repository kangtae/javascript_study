const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";
import { delay, put } from "redux-saga/effects"

export const increase = () => ({ type: INCREASE});
export const decrease = () => ({ type: DECREASE});

export const increaseAsync = () => ({type: INCREASE_ASYNC});
export const decreaseAsync = () => ({type: DECREASE_ASYNC});

function *increaseSaga() {

}
console.log(1223333vvv22243333333)
const initialState = 0;

export default function counter(state = initialState, action) {
	switch (action.type) {
		case INCREASE:
			return state +1;
		case DECREASE:
			return state -1;
		default:
			return state;
	}
}

