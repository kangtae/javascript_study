import * as postsApi from "../api/posts";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

export const getPosts = () => async dispatch => {
	//요청이 시작됨
	dispatch({type : GET_POSTS});
	//API를 호출
	try {
		//성공했을때
		const posts = await postsApi.getPosts();
		dispatch({type : GET_POSTS_SUCCESS, posts});
	} catch (e) {
		//실패했을때
		dispatch({type : GET_POSTS_ERROR, e});
	}
}

export const getPost = (id) => async dispatch => {
	//요청이 시작됨
	dispatch({type : GET_POST});
	//API를 호출
	try {
		//성공했을때
		const post = await postsApi.getPosts(id);
		dispatch({type : GET_POST_SUCCESS, post});
	} catch (e) {
		//실패했을때
		dispatch({type : GET_POST_ERROR, e});
	}
}