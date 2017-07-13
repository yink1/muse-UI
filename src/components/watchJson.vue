<template>
	<div>
		<button @click="change">{{a.b}}</button>
		<div>{{a.c}}</div>
		<ul>
			<li v-for='it in outlist'>
				{{it}}
				<ol>
					<li v-for='on in inList'>
						{{on}}
					</li>
				</ol>
			</li>
		</ul>
	</div>
</template>
<script>
export  default {	
  data () {
    return {
      outlist: [1,2,3,4,5,6,7],
      inList:[11,22,33],
      a: {
      	b: 1,
      	c: 2
      }
    }
  },
  created () {

  },
  mounted () {
    
  },
  computed: {
    
  },
  methods: {
    change () {
    	this.a.c = 3
    	this.outlist.push(99)
    }
  },
  watch: {
  	a:{
  		handler(newValue, oldValue) {
　　　　　　console.log(newValue, oldValue )
　　　　},
		deep: true
  	},
  	outlist: {
　　　　handler(newValue, oldValue) {
	console.log(newValue, oldValue )
　　　　　　for (let i = 0; i < newValue.length; i++) {
　　　　　　　　if (oldValue[i] != newValue[i]) {
　　　　　　　　　　console.log(newValue)
　　　　　　　　}
　　　　　　}
　　　　},
　　　　deep: true
　　}
  }	

	}
</script>
<style>
	
</style>