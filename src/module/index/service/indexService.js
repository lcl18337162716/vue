
const apis = require('@/config/axios/apis');
const axios = require('@/config/axios/axios');

const dataSource = axios.dataSource;
export const indexService = {
	
	setMain:function(main){
		this.main = main;
	},
	selectUserInfo:function(){
		let self = this.main;
        self.userInfo = JSON.parse(localStorage.getItem('userInfo'));
	},
	initMenu:function(){
		let self = this.main;
		var params ={};
		params.userId = JSON.parse(localStorage.getItem('userInfo')).userId;
		dataSource.get("initMenu").post(params).then(
			function (result) {
			   console.log(result);
			   if(result.code === 10000){
			 	window.localStorage.setItem('menus', JSON.stringify(result.data));
			 	self.menus = result.data;
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
	logout:function(){
		let self = this.main;
		self.$router.push("/login");
		localStorage.removeItem("token");
		localStorage.removeItem("userInfo");
	}
}
