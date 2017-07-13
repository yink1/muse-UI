<!-- 引入qrcode--------npm install qrcode -->
<template>
	<div>
		<!-- <div id='code'></div> -->
		<canvas id="canvas"></canvas>
    <input type='range' min='0' max='100' :value="val">
    {{val}}
	</div>
</template>
<script>
import Vue from 'vue'
import QRCode from 'qrcode'
Vue.use(QRCode)
export  default {	
  data () {
    return {
      val: 0,
      codes:'',
      url: 'http://www.baidu.com'
    }
  },
  created () {

  },
  beforeMount(){
    var self = this;
         setInterval(getTotelNumber,1000)
         function getTotelNumber() {
             self.val = Math.floor(Math.random()*100)
         }
         // getTotelNumber();
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
  },
  watch:{

  }
	}
</script>
<style>
	#canvas{width:200px!important;height:200px!important;}
</style>