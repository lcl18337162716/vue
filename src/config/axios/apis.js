var apis = {
    api:{},
	set:function(key,val){
		this.api[key] = val;
	},
	get:function(key){
		return this.api[key];
	}
}



//登录接口
apis.set("doLogin","/manage/login/doLogin");
//首页
apis.set("selectUserInfo","/manage/user/selectUserInfo");
apis.set("initMenu","/manage/index/initMenu");
//用户管理
apis.set("selectUserList","/manage/user/selectUserList");
apis.set("deleteUserById","/manage/user/deleteUserById");

module.exports = apis;
