export const createPromiseThunk = (type, promiseCreator) =>{
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
	
	return  param => async dispatch => {
		dispatch({ type })
		try {
			const payload = await promiseCreator(param);
			dispatch({
				type: SUCCESS,
				payload
			})
		}catch (e){
			dispatch({
				type: ERROR,
				payload: e,
				error: true,
			})
		}
	}
}


const defaultIdSelector = param => param;

export const createPromiseThunkById = (type, promiseCreator, idSelector = defaultIdSelector) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
	
	return  param => async dispatch => {
		const id = idSelector(param);
		console.log("promiseCreator",promiseCreator)
		console.log("id", id)
		dispatch({ type, meta: id })
		try {
			const payload = await promiseCreator(param);
			dispatch({
				type: SUCCESS,
				payload,
				meta: id
			})
		}catch (e){
			dispatch({
				type: ERROR,
				payload: e,
				error: true,
				meta: id
			})
		}
	}
}


export const handleAsyncActions = (type, key, keepData) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
	return (state, action) => {
		switch (action.type) {
			case type:
				return {
				...state,
				[key]: reducerUtils.loading(keepData ? state[key].data : null)
			}
			case SUCCESS:
				return {
					...state,
					[key]: reducerUtils.success(action.payload)
				}
			case ERROR:
				return {
					...state,
					[key]: reducerUtils.error(action.payload)
				}
			default:
				return state;
		}
	}
}
console.log('23332')
export const handleAsyncActionsById = (type, key, keepData) => {
	const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
	return (state, action) => {
		const id = action.meta;
		switch (action.type) {
			case type:
				return {
					...state,
					[key]: {
						...state[key],
						[id]: reducerUtils.loading(keepData ? state[key][id] && state[key][id].data : null)
					}
				}
			case SUCCESS:
				return {
					...state,
					[key]: {
						...state[key],
						[id]: reducerUtils.success(action.payload)
					}
				}
			case ERROR:
				return {
					...state,
					[key]: {
						...state[key],
						[id]: reducerUtils.error(action.payload)
					}
				}
			default:
				return state;
		}
	}
}

export const reducerUtils = {
	initial: (initialData = null) => ({
		loading: false,
		data: initialData,
		error:null
	}),
	loading: (prevState = null) =>({
		data: prevState,
		loading: true,
		error: null
	}),
	success: data => ({
		data,
		loading: false,
		error: null,
	}),
	error: error => ({
		data: null,
		loading: false,
		error
	})
}