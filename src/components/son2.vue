<template>
	<div>
        {{'son2' + sonInfo.name}}
        {{childWords}}
        <h6>{{mod}}</h6>
	</div>
</template>
<script>
export  default { 
  data () {
    return {
      msg:this.childWords
    }
  },
  props:['sonInfo','childWords'],
  created () {
  },
  mounted () {
    
  },
  computed: {
    mod () {
      return this.childWords
    }
  },
  methods: {
    
  }
	}
</script>
<style>
	
</style>