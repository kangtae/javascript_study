import * as postsApi from "../api/posts";
import {
	createPromiseThunk,
	createPromiseThunkById,
	handleAsyncActions,
	handleAsyncActionsById,
	reducerUtils
} from "../lib/asyncUtils";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";
const CLEAR_POST = "CLEAR_POST";

export const getPosts = createPromiseThunk(GET_POSTS, postsApi.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsApi.getPostsById);
export const goToHome = () => (dispatch, getState, {history}) => {
	history.push('/');
}
export const clearPost = () => ({ type: CLEAR_POST})

const initialState = {
	posts: reducerUtils.initial(),
	post: {}
}


const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsyncActionsById(GET_POST, "post", true);


export default function posts(state = initialState, action) {
	switch(action.type){
		case GET_POSTS:
		case GET_POSTS_SUCCESS:
		case GET_POSTS_ERROR:
			return getPostsReducer(state, action)
		case GET_POST:
		case GET_POST_SUCCESS:
		case GET_POST_ERROR:
			return getPostReducer(state, action)
		case CLEAR_POST:
			return {
				...state,
				post: reducerUtils.initial()
			}
		default:
			return state;
	}
}