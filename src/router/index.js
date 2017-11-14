import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/module/login/page/Login'
import Index from '@/module/index/page/Index'
import SysUserManageList from '@/module/sys/userManage/page/UserList'
import SysRoleManageList from '@/module/sys/roleManage/page/RoleList'
import SysPermissionManageList from '@/module/sys/permissionManage/page/PermissionList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
	      {
	      	path: '/sys/userList',
		      name: 'SysUserManage',
		      component: SysUserManageList,
	      },
	      {
	      	path: '/sys/roleList',
		      name: 'SysUserManage',
		      component: SysRoleManageList,
	      },
	      {
	      	path: '/sys/permissionList',
		      name: 'SysUserManage',
		      component: SysPermissionManageList,
	      }
      ]
    }
  ]
})
