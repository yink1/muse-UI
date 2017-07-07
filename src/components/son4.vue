<template>
	<div class="hello">
    <button v-for="it in date" @click="onClickMe(it)">telltofather</button>
  </div>
</template>
<script>
export  default { 
  data () {
    return {
      date:['wsxeee','edcdddd','rfvffff'],
      msg:'34yt894hgio'
    }
  },
  props:{
    sonInfo:{

    },
    target: {

    }
  },
  created () {

  },
  mounted () {
    this.targe(t => {
      console.log(this.t)
    })
  },
  computed: {
    
  },
  methods: {
    onClickMe (it) {
      this.$emit('child-tell',it,this.msg)
    }
	}
}
</script>
<style>
	
</style>