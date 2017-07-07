<template>
	<div>
      <son1 ref='child' :sonInfo='sonInfo'></son1>
      <son2 :sonInfo='sonInfo' :childWords='childWords'></son2>
      {{sonInfoed.name}}
      <button @click="todo">触发子组件的事件</button> 
      <p>child tell me: {{childWords}}</p>
      <son3 v-on:child-tell-me-something='listenToMyBoy'></son3>
      <h3>{{childWords}}</h3>
      <son4 v-on:child-tell='listenTo' :target="passRef"></son4>
      <h5>{{son4}}</h5>
      <h6 ref="reference">ert</h6>
	</div>
</template>
<script>
import son1 from '@/components/son1'
import son2 from '@/components/son2'
import son3 from '@/components/son3'
import son4 from '@/components/son4'
export  default {

  data () {
    return {
      sonInfo :{id:1,name:'yi'},
      sonInfoed :{id:1,name:'y2i'},
      childWords: 'sss',
      son4: 'son4'
    }
  },
  created () {

  },
  mounted () {
    
  },
  computed: {
  },
  methods: {
    passRef (callback) {
      return callback(this.$refs.reference)
    },
    todo: function () { 
      console.log(this.$refs.child.mon); //通过索引调用子组件的fromParent方法 
    },
    listenToMyBoy (msg) {
      this.childWords = msg
    },
    listenTo (m,n) {
      this.son4 = m
      console.log(m,n)
    }
  },
  components: {
    son1,son2,son3,son4
  },
  watch: {
    childWords:{
      handler:function(val,oldval){  
        console.log(val,oldval)

      }
    },
    loop: {
      handler:function(val,oldval){  
        console.log(val,oldval)

      }
    }
  }
	
  }
</script>
<style>
	
</style>