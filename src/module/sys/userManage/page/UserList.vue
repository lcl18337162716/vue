<template>
<el-container class ="container">
	
	<el-form  label-width="80px" :model="searchUserForm" class="searchUserForm">		
		<el-row type="flex" justify="space-around">
			<el-col :span="5">
			  <el-form-item label="账号">
			    <el-input v-model="searchUserForm.loginId" size="small"></el-input>
			  </el-form-item>
		    </el-col>
			<el-col :span="5"  >
				<el-form-item label="用户名字">
		    		<el-input v-model="searchUserForm.name" size="small"></el-input>
		  		</el-form-item>
			</el-col>
		  <el-col :span="5"  >
			  <el-form-item label="昵称">
			    <el-input v-model="searchUserForm.nickName" size="small"></el-input>
			  </el-form-item>
		  </el-col>
		  <el-col :span="5" >
			  <el-form-item label="手机号">
			    <el-input v-model="searchUserForm.cel" size="small"></el-input>
			  </el-form-item>
		  </el-col>
	  	</el-row>
	  	<el-row type="flex" justify="end">
	  		<el-col :span="4">
	  			<el-button type="primary" @click="addUser()" size="small">添加</el-button>
	  		</el-col>
	  		<el-col :span="16"></el-col>
	  		<el-col :span="4">
	  			<el-button type="primary" @click="onSearch()" size="small">查询</el-button>
	  		</el-col>
	  	</el-row> 
	  	<el-row>
  		  <el-table
		    :data="userList"
		    stripe
		    border
		    style="width: 100%"
		    height="200"
		    size="small">
		    <el-table-column
		      type="index"
		      align = "center">
		    </el-table-column>
		    <el-table-column
		      prop="loginId"
		      label="用户账户"
		      align = "center">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      align = "center">
		    </el-table-column>
		    <el-table-column
		      prop="nickName"
		      label="昵称"
		      align = "center">
		    </el-table-column>
		    <el-table-column
		      prop="age"
		      label="年龄"
		      align = "center">
		    </el-table-column>
		    <el-table-column
		      prop="sex"
		      label="性别"
		      align = "center"
		      >
		     <template slot-scope="scope">
               <span v-if="scope.row.sex === true">男</span>
				  <span v-else>女</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      prop="cel"
		      label="手机号"
		      align = "center">
		    </el-table-column>
		    <el-table-column
		      prop="status"
		      label="状态"
		      align = "center">
		      <template slot-scope="scope">
               <span v-if="scope.row.status === true">正常</span>
				  <span v-else>禁用</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      prop="status"
		      label="操作"
		      align = "center">
		      <template slot-scope="scope" align = "center">
               	<el-dropdown :hide-on-click="false" >
				  <span class="el-dropdown-link" style="color: #409EFF;">
				    <i class="iconfont icon-more"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown" >
				    <el-dropdown-item v-if="scope.row.status === true"><el-button type="text" @click="doDisable(scope.row.userId)">禁用</el-button></el-dropdown-item>
				    <el-dropdown-item v-else ><el-button type="text" @click="doEnable(scope.row.userId)">启用</el-button></el-dropdown-item>
				    <el-dropdown-item ><el-button type="text" @click="updateUserById(scope.row.userId)">修改</el-button></el-dropdown-item>
				    <el-dropdown-item ><el-button type="text" @click="deleteUserById(scope.row.userId)">删除</el-button></el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
		      </template>
		    </el-table-column>
		  </el-table>
	  	</el-row>
	  	
	  	<el-row>
		     <el-pagination
		     	@size-change="handleSizeChange"
		        @current-change="handleCurrentChange"
			    layout="total, sizes, prev, pager, next, jumper"
			    :current-page.sync="searchUserForm.pageNo"
			    :page-sizes="[10, 15, 20]"
			    :page-size="searchUserForm.pageSize" 
			    :total="pageTotal">
			  </el-pagination>	
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
				searchUserVO:{
					name:"",//名字
					nikcName:"",//昵称
					cel:"",//手机号
				},
				pageNo:1,//当前页
				pageSize:10,//每页显示条数	
			},
			userList:[//用户列表
			],
			pageTotal:20,//总条数
	    };
    },
  	created:function(){
		userService.setMain(this);
    },
    methods: {
		onSearch:function(){
			userService.selectUserList();
		},
	  	handleSizeChange:function(val) {
	  		let self = this;
	  		self.searchUserForm.pageSize = val;
	  		this.onSearch();
      	},
      	handleCurrentChange:function(val) {
      		let self = this;
	  		self.searchUserForm.pageNo = val;
      		this.onSearch();
      	},
      	doDisable:function(val){
      		this.$message('click on item ' + val);
      	},
      	doEnable:function(val){
      		this.$message('click on item ' + val);
      	},
      	updateUserById:function(val){
      		this.$message('click on item ' + val);
      	},
      	addUser:function(){
      		 this.$router.push('/sys/addUser');
      	},
      	deleteUserById:function(val){
      		this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          userService.deleteUserById(val);
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
      	},
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
   .row-bg {
    padding: 10px 0;
  }
</style>