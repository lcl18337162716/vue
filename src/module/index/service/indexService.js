
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
	/**
	 * 初始化左菜单
	 */
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
	/**
	 * 初始化右菜单（二级）
	 * @param {Object} id 一级菜单id
	 */
	initItem:function(id){
		let self = this.main;
		let menus = JSON.parse(localStorage.getItem('menus'));
		console.log("menus",menus);
		var menu = {};
		var items = new Array();
		let len = menus.length
		console.log("len",len);
		console.log("len",menus[4]);
		for(let n = 0 ; len>n ; n++){
			if( menus[n].permissionId === id){
				menu.name = menus[n].name;
			}
			if( menus[n].pid === id){
				items.push(menus[n]);
			}
		}
		menu.items = items;
		self.menu = menu;
	},
	/**
	 * 登出
	 */
	logout:function(){
		let self = this.main;
		self.$router.push("/login");
		localStorage.removeItem("token");
		localStorage.removeItem("userInfo");
	}
}
