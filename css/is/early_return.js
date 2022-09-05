function loginService(isLogin, user) {
	if(!isLogin){
		if(checkToken()){
			if(!user.nickName){
				return registerUser(user);
			}else{
				refreshToken();
				return "로그인 성공;"
			}
		}else{
			throw new Error("No Token");
		}
	}
}


function loginService(isLogin, user) {
	if(isLogin){
		return;
	}
	
	if(!checkToken()){
		throw new Error("No Token");
	}
	
	if(!user.nickName) {
		return registerUser(user);
	}
	
	login()
}