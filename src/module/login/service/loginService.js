
const apis = require('@/config/axios/apis');
const axios = require('@/config/axios/axios');

const dataSource = axios.dataSource;
export const loginService = {
	
	setMain:function(main){
		this.main = main;
	},
	/**
	 *用户登录
	 */
	doLogin:function(){
		var self = this.main;
		console.log('doLogin======>loginForm',self.loginForm);
		dataSource.getUrl("doLogin").post(self.loginForm).then(
			function (result) {
			   console.log(result);
			   if(result.code === 10000){
			 	window.localStorage.setItem('token', result.data.token);
			   	 let userInfo = JSON.stringify(result.data.userInfo);
			   	 window.localStorage.setItem('userInfo', userInfo);
			   	 self.$router.push('/');
			   }else if(result.code === 20001){
				   	self.$message({
				          dangerouslyUseHTMLString: true,
				          message: result.data.errorMsg,
				          type: 'error'
				        });
			   }else{
			   		self.$message({
			    	      dangerouslyUseHTMLString: true,
			              message: result.msg,
			              type: 'error'
			        });
			   }
			}, function (error) {
			   console.log(error);
			}
		);
	},

}