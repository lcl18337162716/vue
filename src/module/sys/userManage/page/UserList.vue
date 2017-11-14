<template>
<el-container class ="container">
	<el-form  label-width="80px" :model="searchUserForm" class="searchUserForm">
		<el-row>
			<el-col :span="5">
			  <el-form-item label="账号">
			    <el-input v-model="searchUserForm.cel"></el-input>
			  </el-form-item>
		    </el-col>
			<el-col :span="5"  :offset="1">
				<el-form-item label="用户名字">
		    		<el-input v-model="searchUserForm.name"></el-input>
		  		</el-form-item>
			</el-col>
		  <el-col :span="5"  :offset="1">
			  <el-form-item label="昵称">
			    <el-input v-model="searchUserForm.nickName"></el-input>
			  </el-form-item>
		  </el-col>
		  <el-col :span="5"  :offset="1">
			  <el-form-item label="手机号">
			    <el-input v-model="searchUserForm.cel"></el-input>
			  </el-form-item>
		  </el-col>
	  	</el-row>
	  	<el-row>
	  		<el-col :offset="22" :span="2">
	  			<el-button type="primary" @click="onSearch()">查询</el-button>
	  		</el-col>
	  	</el-row>
	  	<el-row>
	  		  <el-table
			    :data="userList"
			    stripe
			    style="width: 100%"
			    height="250">
			    <el-table-column
			      type="index"
			      :index="indexMethod">
			    </el-table-column>
			    <el-table-column
			      prop="loginId"
			      label="用户账户"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名"
			      width="150">
			    </el-table-column>
			    <el-table-column
			      prop="nickName"
			      label="昵称"
			      width="200">
			    </el-table-column>
			    <el-table-column
			      prop="age"
			      label="年龄"
			      width="50">
			    </el-table-column>
			    <el-table-column
			      prop="sex"
			      label="性别"
			      width="50">
			    </el-table-column>
			    <el-table-column
			      prop="cel"
			      label="手机号"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="status"
			      label="状态"
			      width="120">
			    </el-table-column>
			  </el-table>
	  	</el-row>
	</el-form>
</el-container>
</template>

<script>
import { userService }  from '@/module/sys/userManage/service/userService';



export default {
    data() {
      return {
			searchUserForm:{
				name:"",//名字
				nikcName:"",//昵称
				cel:"",//手机号
				
			},
			userList:[//用户列表
			]
	    };
    },
  	created:function(){
	
    },
    methods: {

    },
  }
</script>

<style>
.searchUserForm{
	width: 100%;
}	
.container{
	margin: 3%;
}
</style>