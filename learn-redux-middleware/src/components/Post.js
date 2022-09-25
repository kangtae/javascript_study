import React from 'react';

const Post = ({post}) => {
	console.log("render")
	const { title, body } = post;
	return(
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
}

export default Post;