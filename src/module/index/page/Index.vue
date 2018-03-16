<template>
	<el-container class="index">
	  <el-header class="header">
	  	<div class="header-icon">
	  		<img src="../../../../static/img/icon/logo.png" />
	  	</div>
	  	<div class="header-info">
	  		<div class="header-user-icon">
	  			<el-dropdown @command="handleCommand">
				  <span class="el-dropdown-link">
				  	<div class="header-info-div">
				  		<img src="../../../../static/img/user-img.jpg" class="header-info-img"/>
				  	</div>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item  command="selfInfo">个人信息</el-dropdown-item>
				    <el-dropdown-item command="logout">注销</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
	  		</div>
	  	</div>
	  	<el-dialog
		  title="个人信息"
		  :visible.sync="dialogVisible"
		  width="650px">
		  <div class="dialog-body">
			  <el-row  type="flex" class="row-bg" justify="space-around">
			  	<el-col :span="12">账号:{{userInfo.loginId}}</el-col>
			  	<el-col :span="12">头像:{{userInfo.avatarUrl}}</el-col>
			  </el-row>
			  <el-row type="flex" class="row-bg" justify="space-around">
			  	<el-col :span="12">姓名:{{userInfo.name}}</el-col>
			  	<el-col :span="12">昵称:{{userInfo.nickname}}</el-col>
			  </el-row>
			  <el-row type="flex" class="row-bg" justify="space-around">
			  	<el-col :span="12">性别:<span v-if="userInfo.sex === true">男</span>
								<span v-else>女</span>
			  	</el-col>
			  	<el-col :span="12">年龄:{{userInfo.age}}</el-col>
			  </el-row >
			  <el-row type="flex" class="row-bg" justify="space-around">
			  	<el-col :span="8">QQ:{{userInfo.qq}}</el-col>
			  	<el-col :span="8">电话:{{userInfo.cel}}</el-col>
			  	<el-col :span="8">邮箱:{{userInfo.email}}</el-col>
			  </el-row>
			  <el-row type="flex" class="row-bg" justify="space-around">
			  	<el-col :span="6">国家:{{userInfo.countryName}}</el-col>
			  	<el-col :span="6">省:{{userInfo.provinceName}}</el-col>
			  	<el-col :span="6">市:{{userInfo.cityName}}</el-col>
			  	<el-col :span="6">区:{{userInfo.regionName}}</el-col>
			  </el-row>
			  <el-row type="flex" class="row-bg" justify="space-around">
			  	<el-col :span="24">地址:{{userInfo.address}}</el-col>
			  </el-row>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button type="primary" @click="dialogVisible = false">返回</el-button>
		  </span>
		</el-dialog>
	  </el-header>
	  <el-container>
	    <el-aside :width="isCollapse?'64px':'150px'">
		    <el-menu
		      class="left-menu"
		      @open="handleOpen"
		      @close="handleClose"
		      background-color="#545c64"
		      text-color="#fff"
		      active-text-color="#ffd04b"
		      :collapse="isCollapse">
		       <div class="el-menu-item" @click="onMenu()"><i class="el-icon-menu" ></i></div>
		      <el-menu-item :index="item.orders+''" @click="onMenuItem(item.permissionId)" v-for = "item in menus" 
		      	v-if="menus.length>0 && item.pid == 0" :key="item.permissionId">
		        <i class="el-icon-edit" ></i>
		        <span slot="title">{{item.name}}</span>
		      </el-menu-item>
		    </el-menu>
		  </el-aside>
		  <el-aside :width="isShow?'200px':'1px'" class="aside-menu">
		  	  <i class="el-icon-arrow-left icon-left" @click="closeMenuItem()" ></i>
		  	  <el-menu
		  	  	class="right-menu"
		      @open="handleOpen"
		      @close="handleClose"
		      text-color="#fff"
		      router
		      active-text-color="#ffd04b">
		       <div style="font-size: 16px;height: 60px;line-height: 60px;" >{{menu.name}}</div>
			      <el-menu-item :index="item.url+''"  v-for = "item in menu.items" 
			      	v-if="menu.items.length>0" :key="item.permissionId">
			        <span slot="title">{{item.name}}</span>
			      </el-menu-item>
		      </el-menu>
		  </el-aside>
	    <el-container>
	      <el-main class="main" style="background-color:white;"> 
	      	<router-view></router-view>    	
	      </el-main>
	    </el-container>
	  </el-container>
	</el-container>
</template>

<script>
 import {indexService}  from '@/module/index/service/indexService';
 export default {
    data () {
      return {
        isCollapse: false,//左菜单是否展开
        isShow: false,//右菜单是否显示
        dialogVisible: false,//个人信息弹框显示
        userInfo:{ //个人信息
        	userId:"",//id
        	name:"",//name
        	loginId:"",//登录账号
        	pwd:"",//密码
        	nickName:"",//昵称
        	email:"",//邮箱
			cel:"",//手机 
			age:"",//年龄
			avatarUrl:"",//头像
            countryId:"",//国家id
			countryName:"",//国家name
			provinceId:"",//省id
			provinceName:"",//省name
			cityId:"",//城市id
			cityName:"",//城市name
			regionId:"",//区ID
			regionName:"",//区name
   			address:"",//地址        	
        },
        menus:[ //左菜单显示1级目录
	        {   
       		}
        ],
        menu:{    //右菜单显示2级目录
        	name:"",
        	items:[
        		{
        		}			        	
        	]
        },
        breadcrumb:{
        	item1:{
        		name:"",
        	},
        	item2:{
        		name:"",
        	},
        	item3:{
        		name:"",
        	},
        	item4:{
        		name:"",
        	},
        }
      };
    },
    created:function(){
      	  indexService.setMain(this);
          indexService.initMenu();
    },
    methods: {
      handleOpen:function(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose:function(key, keyPath) {
        console.log(key, keyPath);
      },
      onMenu:function(){
      	this.isCollapse = !this.isCollapse;
      },
      onMenuItem:function(id){
      	this.isShow = true;
      	indexService.initItem(id);
      },
      closeMenuItem:function(){
      	this.isShow = false;
      },
      handleCommand:function(command) {
        if(command === "logout"){
        	indexService.logout();
        }
        if(command === "selfInfo"){
        	this.dialogVisible = true;
        	indexService.selectUserInfo();
        }
      }
    }
  }
</script>

<style>
.header{
	width: 100%;
	background-color: #545c64;
	position: relative;
}
.header-info{
	float: right;
	cursor: pointer;
    position: absolute;
    top: 10%;
    right: 0;
    z-index: 999;
}
.header-info-div{
	width: 50px;
	height: 50px;
}
.header-info-img{
	width: 100%;
    height: 100%;
    border-radius:50%;

}
.header-user-icon{
	float: none;
}
.el-dropdown-link{
	color: white;
}
.el-dropdown {
    margin-right: 25px;
}
.el-dropdown + .el-dropdown {
   margin-left: 15px;
}
.el-icon-arrow-down {
   font-size: 12px;
}
.el-menu-item, .el-submenu__title {
    height: 48px;
    line-height: 48px;
}
.header-icon{
	width: 0;
    height: 60px;
    float: left;
}
.header-icon img{
	margin-top: 12px;
}
.el-aside {
  background-color: #545c64;
}
.aside-menu{
	position: relative;
	background-color:#2C3E50;
}
.el-menu{
	border-right: none;
}
.icon-left{
	cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 999;
}
.left-menu{
	height: 100vh;
	border-top: 1px solid #2C3E50;
	border-right: none;
}
.right-menu{
	background-color:#2C3E50;
}
.main{
	
}
.dialog-body{
	text-align: left;
	margin-left:5%;
}
 .row-bg {
    padding: 10px 0;
 }
</style>