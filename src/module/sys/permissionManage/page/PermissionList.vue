<template>
<el-container >
	<el-button type="text">文字按钮permission</el-button>
<el-button type="text" disabled>文字按钮</el-button>

<div class="block">
  <span class="demonstration">可选择任意一级菜单的选项</span>
  <el-cascader
    placeholder="试试搜索：指南"
    :options="options"
    filterable
    change-on-select
     @change="handleChange"
     v-model="selectedOptions3"
  ></el-cascader>
</div>
</el-container>
</template>

<script>
//import { userService }  from '@/module/sys/userManage/service/userService';



export default {
    data() {
      return {
/*        loginForm: {
   	        loginId:'',
   	        pwd:''
        },
	      rules: loginFromRules*/
        selectedOptions3: ["zujian", "data", "tag"],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }]
        }]
	    };
    },
  	created:function(){
	
    },
    methods: {
       handleItemChange:function(val){
          console.log('active item:', val);
       },
       handleChange:function(val){
          console.log('active item:', val);
       }
    },
  }
</script>

<style>
</style>