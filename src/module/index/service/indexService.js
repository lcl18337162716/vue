
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
		dataSource.get("initMenu").post().then(
			function(result){
				
			},function(error){
				
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
