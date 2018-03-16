<template>
  <el-container >
   <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>
   <form action="" method="post" enctype="multipart/form-data" id="uploadFormMulti">
        <input style="display: none" :id="uniqueId" type="file" name="avator" multiple accept="image/jpg,image/jpeg,image/png,image/gif" @change="uploadImg('uploadFormMulti')"><!--  -->
   </form>
</el-container>
  
</template>

<script>
//import { userService }  from '@/module/sys/userManage/service/userService';
import { quillEditor } from 'vue-quill-editor';

// var toolbarOptions = {
//  container: [
//       ['bold', 'italic', 'underline', 'strike'],
//       ['blockquote', 'code-block'],
//       [{ 'header': 1 }, { 'header': 2 }],
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//       [{ 'script': 'sub' }, { 'script': 'super' }],
//       [{ 'indent': '-1' }, { 'indent': '+1' }],
//       [{ 'direction': 'rtl' }],
//       [{ 'size': ['small', false, 'large', 'huge'] }],
//       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//       [{ 'color': [] }, { 'background': [] }],
//       [{ 'font': [] }],
//       [{ 'align': [] }],
//       ['clean'],
//       ['link', 'image', 'video']
//     ],
//   handlers: {
//     'image': function(value){
//       console.log("image----------------value:",value);
//       console.log("image----------------value:",this);
//       if(value){
//          var fileInput = document.getElementById(vm.uniqueId) //隐藏的file文本ID
//          fileInput.click() //加一个触发事件
//       }

//     }
//   }
// }

var toolbarOptions = {
 container: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['link', 'image', 'video']
    ]
}

export default {
    data() {
      return {
        content: '2345678',
        editorOption: {
            theme: 'snow', //主题
            modules: {
               toolbar: toolbarOptions,  //工具栏
            },
            placeholder:"请输入商品详情......",
            readOnly: false,
        },
        uniqueId:"123456",
        //     theme: 'snow',
        //     boundary: document.body, 

        //     modules: {
        //        toolbar: toolbarOptions,
        //     },
        //     placeholder: '请输入...',
        //     readOnly: false
        // }
	    };
    },
  	created:function(){
	    
    },
    mounted: function () {
    	console.log('editor var self = this;var self = this;var self = this;var self = this;var self = this;!', this)
        var self = this;
        var imgHandler = async function(value) {
        self.addImgRange = self.$refs.myQuillEditor.quill.getSelection()
         if (value) {
          var fileInput = document.getElementById(self.uniqueId) //隐藏的file文本ID
          fileInput.click() //加一个触发事件
         }
        }

         var linkHandler = async function(value) {
          if (value) {
              var href = prompt('Enter the URL');
              console.log("hrefhref",href);
              this.quill.format('link', href);
            } else {
              this.quill.format('link', false);
            }
         }
        self.$refs.myQuillEditor.quill.getModule("toolbar").addHandler("link", linkHandler); //添加自定义的 上传图片方法

        self.$refs.myQuillEditor.quill.getModule("toolbar").addHandler("image", imgHandler); //添加自定义的 上传图片方法
        
    },
    methods: {
      init:function(){
          
      },
      onEditorBlur:function(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus:function(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady:function(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange:function({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      },
      uploadImg: async function(id) {
        console.log("id",id);
        var self = this;
        self.imageLoading = true;
        var formData = new FormData(document.getElementById(id)[0]);
        try {
            const url = await self.uploadImgReq(formData);// 自定义的图片上传函数
            console.log("uploadImg url is : ",url);
            if (url != null && url.length > 0) {
                var value = url;
                self.addImgRange = self.$refs.myQuillEditor.quill.getSelection();
                value = value.indexOf('http') != -1 ? value : 'http:' + value;
                console.log("uploadImg url is : ",url);
                console.log("quill is",self.$refs.myQuillEditor.quill);
                self.$refs.myQuillEditor.quill.insertEmbed(self.addImgRange != null?self.addImgRange.index:0, 'image', value);
            } else {  
                self.$message.warning("图片增加失败");
            }
            document.getElementById(self.uniqueId).value='';
        } catch ({message: msg}) {
            document.getElementById(self.uniqueId).value='';
            self.$message.warning(msg);
        }
        self.imageLoading = false;
       },


       uploadImgReq:function(formData){
        console.log("请求后台 上传图片ing",formData);





        return 'http://ozjjfy3sy.bkt.clouddn.com/401439193211566280.jpg';
       },
       sbu:function(){

       }
    },
    components: {
      quillEditor
    },
  }
</script>

<style>
</style>