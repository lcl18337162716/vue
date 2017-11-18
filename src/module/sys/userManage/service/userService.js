
const apis = require('@/config/axios/apis');
const axios = require('@/config/axios/axios');

const dataSource = axios.dataSource;
export const userService = {
	
	setMain:function(main){
		this.main = main;
	},
	selectUserList:function(){
		let self = this.main;
		var params ={};
		dataSource.getUrl("selectUserList").post(self.searchUserForm).then(
			function (result) {
			   console.log(result);
			   if(result.code === 10000){
				   	self.userList = result.data.list;		
					self.pageTotal = result.data.total;//总条数
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
	/**
	 * 删除用户
	 * @param {Object} id
	 */
	deleteUserById:function(id){
		let self = this.main;
		var params ={};
		params.userId = id;
		dataSource.getUrl("deleteUserById").get(params).then(
			function (result) {
			   console.log(result);
			   if(result.code === 10000){
				   	self..$message({
			            type: 'success',
			            message: result.msg,
			          });
			          this.selectUserList();
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
	}
}