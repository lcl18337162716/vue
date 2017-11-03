export const loginFromRules = {
		username: [
		        { required: true, message: '请输入账号', trigger: 'blur' },
		        { min: 6, max: 16, message: '账号长度在 6 到 16 个字符', trigger: 'blur' }
		      ],
		password: [
		        { required: true, message: '请输入密码', trigger: 'change' }
		      ]
};

