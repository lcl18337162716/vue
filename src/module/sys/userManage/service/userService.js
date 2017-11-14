
const apis = require('@/config/axios/apis');
const axios = require('@/config/axios/axios');

const dataSource = axios.dataSource;
export const userService = {
	
	setMain:function(main){
		this.main = main;
	},
}