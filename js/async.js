async function fetchAuthorName(postId) {
	const postResponse = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	const post = await postResponse.json();
	const userId = post.userId;
	const userResponse = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	const user = await userResponse.json();
	return user.name;
}

fetchAuthorName(1).then((name) => console.log("name:", name));

async function logName() {
	var user = await fetchUser('domain.com/users/1');
	if (user.id === 1) {
		console.log(user.name);
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
	await sleep(1000);
	return '멍멍이';
};

const getRabbit = async () => {
	await sleep(500);
	return '토끼';
};
const getTurtle = async () => {
	await sleep(3000);
	return '거북이';
};

async function process() {
	const first = await Promise.race([
		getDog(),
		getRabbit(),
		getTurtle()
	]);
	console.log(first);
}

process();