import React from 'react';
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import {decrease, decreaseAsync, increase, increaseAsync} from "../modules/counter";

const CounterContainer = (props) => {
	const number = useSelector(state => state.counter)
	const disaptch = useDispatch();
	
	const onIncrease = () => {
		disaptch(increaseAsync())
	}
	
	const onDecrease = () => {
		disaptch(decreaseAsync())
	}
	
	return (
		<Counter
			number={number}
			onIncrease={onIncrease}
			onDecrease={onDecrease}
		/>
	)
};

export default CounterContainer;