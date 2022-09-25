import React from 'react';
import PostContainer from "../Containers/PostContainer";

function PostPage({match}) {
	const { id } = match.params;
	const postId = parseInt(id, 10);
	console.log(111)
	return (
		<PostContainer postId={postId} />
	);
}

export default PostPage;