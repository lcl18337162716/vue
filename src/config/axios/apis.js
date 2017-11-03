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
apis.set("doLogin","/ui/user/login");
//首页






module.exports = apis;
