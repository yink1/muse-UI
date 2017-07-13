<template>
    <div class="amap-page-container">
<!--       <el-amap vid="amapDemo"  :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
      </el-amap> -->
      <el-amap vid="amapDemo" :map-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
      </el-amap>
      <div class="toolbar">
        <button @click="add()">add marker</button>
      </div>
    </div>
</template>
<script>
import VueAMap from 'vue-amap';
import { AMapManager } from 'vue-amap';
let amapManager = new VueAMap.AMapManager();
export  default {	
  data () {
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      amapManager,
       events: {
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
              alert('map clicked');
            }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                console.log(o);
              }
            }
          }]
	}
  },
  created () {

  },
  mounted () {
    
  },
  computed: {
    
  },
  methods: {
            add() {
          let o = amapManager.getMap();
          let marker = new AMap.Marker({
            position: [121.59996, 31.177646]
          });

          marker.setMap(o);
        }
  }
	}
</script>
<style>
.amap-page-container{
	height:300px;
	position: relative;
}
    .amap-demo {
      height: 300px;
      width:900px;
    }
    .toolbar{
    	position: absolute;
    	bottom:5px;
    	left:5px;
    	width:88px;
    	height:40px;
    }	
</style>