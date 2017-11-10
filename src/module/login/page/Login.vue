<template >
	<div class="login">
		<el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="form">
				  <el-row>
				  	<el-col :span="15">
					  <el-form-item label="账号:" prop="loginId" class="login-form-label">
					    <el-input v-model="loginForm.loginId"></el-input>
					  </el-form-item>
					 </el-col>
					 <el-col :span="9"></el-col>
				  </el-row>
				  <el-row>
				  	<el-col :span="15">
					  	<el-form-item label="密码:" prop="pwd">
				    	<el-input v-model="loginForm.pwd"></el-input>
				  		</el-form-item>
					 </el-col>
					 <el-col :span="9"></el-col>
				  </el-row>				 
				  	<el-row>
				  	<el-col :span="15">
				  		 <el-form-item>
					  		<el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
				    		<el-button @click="resetForm('loginForm')">重置</el-button>
				 		 </el-form-item>
					 </el-col>
					 <el-col :span="9"></el-col>
				  </el-row>
				    
		</el-form>			
  </div>
</template>

<script>
import { loginFromRules }   from '@/module/login/rules/loginRules';
import {loginService}  from '@/module/login/service/loginService';
//var loginService = require('@/module/login/service/loginService');


export default {
    data() {
      return {
        loginForm: {
   	        loginId:'',
   	        pwd:''
        },
	      rules: loginFromRules
	    };
    },
  	created:function(){
	   loginService.setMain(this);
    },
    methods: {
      onSubmit(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
				loginService.doLogin();
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
         this.$refs[formName].resetFields();
      }
    },

  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login{
	width: 100%;
    height: 100%;
    background-image:url(../../../../static/img/login/lgbg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.el-form-item__label{
	color: white !important;
}

.form{
	width: 500px;
	height: 250px;
	position: absolute;
	top: 0;
	bottom: 0;
	left:0;
	right: 0;
	margin: auto;
}
</style>
