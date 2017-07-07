<template>
	<div id='tab1'>
    <mu-flexbox wrap="wrap" justify="space-around" class="box">
        <mu-flexbox-item basis="28%" class="item" :key="item.id" v-for="item in playList">
          <router-link to="/">
          <div class="bar">{{item.playCount}}</div>
          <img class="item-img img-response" :src="item.image" lazy="loading">
          <div class="item-name">{{item.title}}</div>
          </router-link>
        </mu-flexbox-item>
      </mu-flexbox>
   <mu-flexbox>
    <mu-flexbox-item class="flex-demo">
      1
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      2
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      3
    </mu-flexbox-item>
  </mu-flexbox>
	</div>
</template>
<script>
export  default {	
  data () {
    return {
      playList: [{
        image: '../static/img.jpg',
        title: 'Breakfast',
        author: 'Myron',
        con:'12345'
      }, {
        image: '../static/img2.jpg',
        title: 'Burger',
        author: 'Linyu',
        con:'123456'
      }, {
        image: '../static/img.jpg',
        title: 'Camera',
        author: 'ruolin',
        con:'12345'
      }, {
        image: '../static/img2.jpg',
        title: 'Hats',
        author: 'kakali',
        con:'12345'
      }, {
        image: '../static/img.jpg',
        title: 'Honey',
        author: 'yuyang',
        con:'12345'
      }, {
        image: '../static/img2.jpg',
        title: 'Morning',
        author: 'mokayi',
        con:'12345'
      }, {
        image: '../static/img.jpg',
        title: 'Vegetables',
        author: 'NUyyyyyyy',
        con:'12345'
      }, {
        image: '../static/img2.jpg',
        title: 'water',
        author: 'TDDyyyyyyy',
        con:'12345'
      }]
      
    }
  },
  created () {

  },
  computed () {
  	
  },
  mounted () {
    
  },
  methods: {
    
  }
	}
</script>
<style scoped>
	.mu-grid-tile>img {
  width:100%;
  height: 169px !important;
}
.courlist{
  height: 220px !important;
  margin:10px 0;
  position: static!important;
}
.mu-grid-tile{position: static!important;}
.mu-grid-tile-titlebar{position: static!important;}

</style>