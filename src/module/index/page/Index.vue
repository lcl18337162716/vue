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
		  width="30%"
		  :before-close="handleDialogClose">
		  <span>这里显示个人信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	  </el-header>
	  <el-container>
	    <el-aside :width="isCollapse?'64px':'150px'">
		    <el-menu
		      default-active="2"
		      class="left-menu"
		      @open="handleOpen"
		      @close="handleClose"
		      background-color="#545c64"
		      text-color="#fff"
		      active-text-color="#ffd04b"
		      :collapse="isCollapse">
		      <el-menu-item index="1" @click="onMenu()">
		      	<i class="el-icon-menu" ></i>
		      </el-menu-item >
		      <el-menu-item index="2" @click="onMenuItem()">
		        <i class="el-icon-setting" ></i>
		        <span slot="title">系统管理</span>
		      </el-menu-item>
		      <el-menu-item index="3" @click="onMenuItem()">
		        <i class="el-icon-edit" ></i>
		        <span slot="title">个人中心</span>
		      </el-menu-item>
		    </el-menu>
		  </el-aside>
		  <el-aside :width="isShow?'200px':'1px'" class="aside-menu">
		  	  <i class="el-icon-arrow-left icon-left" @click="closeMenuItem()" ></i>
		  	  <el-menu
		  	  	class="right-menu"
		  	  default-active="3"
		      @open="handleOpen"
		      @close="handleClose"
		      text-color="#fff"
		      active-text-color="#ffd04b">
		       <div style="font-size: 16px;height: 60px;line-height: 60px;" >12345678</div>
		      <el-menu-item index="1" >
		        <span slot="title">一级标题</span>
		      </el-menu-item>
		      
		  	   <el-menu-item index="4" >
		        <span slot="title">二级标题</span>
		      </el-menu-item>
		      <el-menu-item index="5" >
		        <span slot="title">二级标题</span>
		      </el-menu-item>
		      </el-menu>
		  </el-aside>
	    <el-container>
	      <el-main class="main" style="background-color: #00FFFF;">    
	      	
	      	
	      	
	      </el-main>
	    </el-container>
	  </el-container>
	</el-container>
</template>

<script>
 export default {
    data () {
      return {
        isCollapse: false,
        isShow: false,
        dialogVisible: false,
      };
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
      onMenuItem:function(){
      	this.isShow = true;
      },
      closeMenuItem:function(){
      	this.isShow = false;
      },
      handleCommand:function(command) {
        if(command === "logout"){
        	this.$router.push("/login");
        }
        if(command === "selfInfo"){
        	this.dialogVisible = true;
        }
      },
      handleDialogClose:function(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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
	border-top: 1px solid cyan;
	border-right: none;
}
.right-menu{
	background-color:#2C3E50;
}
.main{
	
}
</style>