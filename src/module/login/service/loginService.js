
var apis = require('@/config/axios/apis');
var axios = require('@/config/axios/axios');

var dataSource = axios.dataSource;
module.exports = {
	setMain: function(main){
		this.main = main;
	},
	doLogin:function(){
		var self = this.main;
		//请求
		console.log('loginForm',self.loginForm);
		self.$router.push('/');
		dataSource.get("doLogin").post(self.loginForm).then(
			function (data) {
			   console.log(data);
			}, function (error) {
			   console.log(error);
			}
		);
	}
}