const x = 1;
if(x >= 0){
	console.log("x는 0보다 크거나 같다")
}else if(x > 0){
	console.log("x는 0보다 크다")
}

if(x >= 0){
	console.log("x는 0보다 크거나 같다")
}else{
	if(x > 0) {
		console.log("x는 0보다 크다1")
	}
}

/*else if는  되도록 사용 안하는게 좋을 것 같다.111*/