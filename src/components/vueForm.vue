<template>
	<div>
		<form @submit.prevent="handleSubmit">
      <input type="text" v-model="username" placeholder="请输入用户名">
      <div style="color:red;">{{errors.username}}</div>
      <br>
      <input type="password" v-model="password">
      <div style="color:red;">{{errors.password}}</div>
      <br>
      <input type="email" v-model="email">
      <div style="color:red;">{{errors.email}}</div>
      <br>
      <input type="tel" v-model="phone">
      <div style="color:red;">{{errors.phone}}</div>
      <br>
      <input type="submit" value='提交'>
      <!-- <ul><li v-for="err in errors"  style="color:red;">{{err}}</li></ul> -->
    </form>
	</div>
</template>
<script>
	export default {
  data () {
  	return{
  			username: '',
  			password: '',
  			email: '',
  			phone: '',
  		errors:{}
  	}
  },

  compouted: {
    errors () {
      return this.$vuerify.$errors // 错误信息会在 $vuerify.$errors 内体现
    }
  },

  vuerify: {
    username: {
      test: /\w{4,}/,  // 自定义规则，可以是函数，正则或者全局注册的规则（填字符串）
      message: '至少 4 位字符'
    },
    password: 'required', // 使用全局注册的规则
    email: [ // 支持传入数组    test:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      'required',
      'email',
      { test: /@gmail/, message: '只能是谷歌邮箱' }
    ],
    phone: {
	    test: /^1[3|4|5|8][0-9]\d{4,8}$/,
	    message: '请输入正确的十一位手机号'
  	}
  },

  methods: {
    handleSubmit () {
      if (this.$vuerify.check()) { // 手动触发校验所有数据
        alert(2)
      }else{

      	this.errors=this.$vuerify.$errors;
      	console.log(this.errors.username)
      }
    }
  }
}
</script>
<<style>
	
</style>