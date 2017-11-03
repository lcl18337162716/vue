<template >
	<div class="login">
		<el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="form">
				  <el-row>
				  	<el-col :span="15">
					  <el-form-item label="账号:" prop="username" class="login-form-label">
					    <el-input v-model="loginForm.username"></el-input>
					  </el-form-item>
					 </el-col>
					 <el-col :span="9"></el-col>
				  </el-row>
				  <el-row>
				  	<el-col :span="15">
					  	<el-form-item label="密码:" prop="password">
				    	<el-input v-model="loginForm.password"></el-input>
				  		</el-form-item>
					 </el-col>
					 <el-col :span="9"></el-col>
				  </el-row>
<!--				  <el-row>
					  <el-col :span="9">
					  	<el-form-item label="验证码:" prop="mobileCode">
					    <el-input v-model="loginForm.mobileCode"></el-input>
					  </el-form-item>
					  </el-col>
					  <el-col :span="6">
					  	<img v-show="captchaCodeImg" :src="captchaCodeImg">
					  </el-col>
				  </el-row>-->
				 
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
var loginService = require('@/module/login/service/loginService');
export default {
    data() {
      return {
        loginForm: {
   	        username:'',
   	        password:''
        },
	      rules: loginFromRules
	    };
    },
    methods: {
      created(){
            //this.getCaptchaCode();
       },	
      onSubmit(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
				loginService.setMain(this);
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
	width: 30%;
	height: 250px;
	position: absolute;
	top: 0;
	bottom: 0;
	left:0;
	right: 0;
	margin: auto;
}
</style>
