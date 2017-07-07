<template>
	<div class="hello">
    <button v-for="it in date" @click="onClickMe(it)">telltofather</button>
  </div>
</template>
<script>
export  default { 
  data () {
    return {
      date:['wsx','edc','rfv','performance'],
      msg:'34yt894hgio'
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
    onClickMe (it) {
      this.$emit('child-tell-me-something',it)
    }
	}
}
</script>
<style>
	
</style>