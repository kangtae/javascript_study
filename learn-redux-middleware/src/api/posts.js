const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
	{
		id:1,
		title: "1번 타이틀",
		body: "1번 바디"
	},
	{
		id:2,
		title: "2번 타이틀",
		body: "2번 바디"
	},
	{
		id:3,
		title: "3번 타이틀",
		body: "3번 바디"
	},
]

export const getPosts = async() => {
	await sleep(500);
	return posts;
}

export const getPostsById = async (id) => {
	await sleep(500)
	return posts.find(post => post.id === id);
}