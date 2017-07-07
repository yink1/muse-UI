<template>
	<div>
      <div>
        <mu-raised-button label="点这里" ref="button"  @click="toggle"/>
  <h3 class="demo-popover-title">当前设置</h3>
  <mu-popover class="rgbaBg" :open="open" :autoPosition="true" :trigger="trigger" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">
    <mu-menu>
      <mu-circular-progress :size="90" color="red"/>
    </mu-menu>
  </mu-popover>
      </div>
     <mu-raised-button ref="buttoned" label="在这里定位" class="positionButton demo-raised-button"/>
       <!-- <div class="positionButton" ref="buttoned">
        在这里定位
      </div> -->
	</div>
</template>
<script>
export  default {

  data () {
    return {
      open: false,
      trigger: null,
      anchorOrigin: {
        vertical: 'center',
        horizontal: 'middle'
      },
      targetOrigin: {
        vertical: 'center',
        horizontal: 'middle'
      }
    }
  },
  created () {

  },
  mounted () {
    this.trigger = this.$refs.buttoned.$el
  },
  computed: {
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    handleClose () {
      this.open = false
    },
    stringify (obj) {
      return JSON.stringify(obj)
    }
  
  },
  components: {
    
  },
  watch: {
  }
	
  }
</script>
<style>
	.demo-popover-title {
  margin-bottom: 0;
  font-weight: 500;
  margin-top:200px;
}
.mu-popover{
  width:90px!important;
  height:100px!important;
  background-color:rgba(0,0,0,0)!important;
  box-shadow: 0 1px 6px rgba(255,255,255,1), 0 1px 4px rgba(255,255,255,1)!important;
}
.demo-anchor-origin{
  display: flex;
}
.mu-menu-list{
  width:90px!important;
}
.demo-origin-block{
  display: flex;
  flex-direction: column;
  margin-left: 12px;
}
.demo-origin-raido {
  margin-top: 12px;
}
</style>