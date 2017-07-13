<!-- 引入qrcode--------npm install qrcode -->
<template>
	<div>
		<!-- <div id='code'></div> -->
		<canvas id="canvas"></canvas>
	</div>
</template>
<script>
import Vue from 'vue'
import QRCode from 'qrcode'
Vue.use(QRCode)
export  default {	
  data () {
    return {
      codes:'',
      url: 'http://www.baidu.com'
    }
  },
  created () {

  },
  mounted () {
    this.useqrcode();
  },
  computed: {
    
  },
  methods: {
    useqrcode(){
		var canvas = document.getElementById('canvas')

		QRCode.toCanvas(canvas, this.url, function (error) {
		if (error) console.error(error)
		console.log('success!');
		})
	}
  }
	}
</script>
<style>
	#canvas{width:200px!important;height:200px!important;}
</style>