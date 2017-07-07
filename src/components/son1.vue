<template>
	<div @click="change">
        {{sonInfo.id}}
	</div>
</template>
<script>
export  default { 
  data () {
    return {
      mon:'etgerioghioe'
    }
  },
  props:['sonInfo'],
  created () {

  },
  mounted () {
    
  },
  computed: {
    
  },
  methods: {
  fromParent () { 
    console.log("happened fromParent by ref");
    this.$emit('sonInfoed',"'sonInfoed':{id:1,name:'y4i'}") 
  },
  change () {
      this.$emit('sonInfoed',"'sonInfoed':{id:1,name:'y4i'}")
    }
  }
	}
</script>
<style>
	
</style>