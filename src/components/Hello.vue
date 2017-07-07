<template>
  <div class="hello">
  <mu-tabs>
  <mu-tab title="LIGHT (DEFAULT)"/>
  <mu-tab title=""/>
  <mu-tab title=""/>
  <mu-tab title=""/>
</mu-tabs>
<div class="jifen">
  <ul>
    <li>
      <div class="itemdata">riqi</div>
      <div class="itemchange">biandong</div>
      <div class="itemjifen">jifenbiandong</div>
    </li>
    <li v-for='(item,i) in jifenlist' @mouseover="hoverChange">
      <div class="itemdata por">{{item.data}}</div>
      <div class="itemchange por" @mouseover="changeBg(i)" @mouseout="changedis(i)">{{item.change}}
        <div class="itemchangeChild poa dn">{{item.change}}</div>
      </div>
      <div class="itemjifen">{{item.changjifen}}</div>
    </li>
  </ul>
</div>
<div>
  <mu-list>
  <li v-for="item in jifenlist">
    <mu-list-item  :title="item.data"></mu-list-item>
    <mu-list-item  :title="item.change">
      
    </mu-list-item>
    <mu-list-item  :title="item.changjifen"></mu-list-item>
  </li>    
  </mu-list>
</div>
<div>
<router-link to='/views'>vue视图</router-link>
<router-link to='/viewm'>vue视图m</router-link>
<router-link to='/viewn'>vue视图n</router-link>
<router-view></router-view>
<!--   <mu-circular-progress :size="40"/>
<mu-circular-progress :size="60" :strokeWidth="5"/> -->
  <mu-circular-progress :size="40" :value='44' color="red"/>
</div>

<mu-card>
  <mu-card-header title="Myron Avatar" subTitle="sub title">
    <mu-avatar src="../../static/img.jpg" slot="avatar"/>
  </mu-card-header>
  <mu-card-media title="Image Title" subTitle="Image Sub Title">
    <img src="../../static/img2.jpg" height="300" width="300" />
  </mu-card-media>
  <mu-card-title title="Content Title" subTitle="Content Title"/>
  <mu-card-text>
    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
  </mu-card-text>
  <mu-card-actions>
    <mu-flat-button label="Action 1"/>
    <mu-flat-button label="Action 2"/>
  </mu-card-actions>
</mu-card>
<!-- <mobile-tear-sheet>
  <mu-list class="mulistinfo">
    <mu-list-item title="Inbox">
      <mu-icon slot="left" value="inbox"/>
    </mu-list-item>
    <mu-list-item title="Starred">
      <mu-icon slot="left" value="grade"/>
    </mu-list-item>
    <mu-list-item title="Sent mail">
      <mu-icon slot="left" value="send"/>
    </mu-list-item>
    <mu-list-item title="Drafts">
      <mu-icon slot="left" value="drafts"/>
    </mu-list-item>
  </mu-list>
  <mu-divider />
</mobile-tear-sheet> -->
<div>
  <mu-list class="mulistinfo">
    <mu-list-item  v-for="item in mulist" :title="item.title" @click="getInfo(item.title)">
      <div class="node" v-if="item.num">( <span >{{item.num}}</span> )</div> 
      <mu-icon slot="left" :value=" item.value "/>
    </mu-list-item>
  </mu-list>
</div>

    <h1>{{ msg }}</h1>
    <h2>Essential Links{{computNum}}</h2>
    <form action="" method="get">
    username:<input type="email" v-model='msg'>
    <br>
    password:<input type="password" v-model='pwd'>
    <br>
    <input type="submit" value='submited' @click='getJosn' @mouseover="alerted">
    </form>
    <ul style="border-bottom:1px solid #ccc;width:100%;height:40px;">
      <li style="border-bottom:1px solid red;display:inline-block;padding:0 20px;height:40px;line-height:40px;float:left">first</li>
    </ul>
    <ul>
      <li v-for='(item,key) in todolist' @click="getNum(key)">{{item.name}}+{{key}}</li>
    </ul>
    <div style="width:100px;height:20px;margin:0 auto 10px;padding:0 100px;border:1px solid red">{{del}}</div>
    <button @click='ifShow=!ifShow'>显示/隐藏</button>
    <transition name='fade'>
    <child v-if='ifShow' :temp='num'></child>
    </transition>
    <input type="checkbox" id='a' name='checkVal' value='A' v-model="checkVal">
    <label for="a">A</label>
    <input type="checkbox" id='b' name='checkVal' value='B' v-model="checkVal">
    <label for="b">B</label>
    <br>
    <span>checkVal:{{checkVal}}</span>
    <museUi></museUi>
    <vueForm></vueForm>
    <tabs></tabs>
  <div style='width:100%;height:200px;'></div>
  </div>
</template>

<script>
import museUi from './museUi'
import vueForm from './vueForm'
import tabs from './tabs'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome Vue.js',
      pwd:'',
      num:'er',
      del:'',
      show:false,
      number:3,
      checkVal:[],
      ifShow:true,
      todolist:[{name:'yi',age:12},
              {name:'er',age:22},
              {name:'san',age:32}
      ],
      mulist:[{title:'个人中心',value:'inbox'},
              {title:'上传/下载',value:'grade'},
              {title:'客服消息',value:'send'}
      ],
      jifenlist:[
          {data:'前天',change:'充值',changjifen:'获得200积分'},
          {data:'日期',change:'变动事项',changjifen:'积分变动'},
          {data:'日期',change:'变动事项',changjifen:'积分变动'},
      ]
    }
  },
  created () {
    const num = this.number;
    this.mulist.map(e => {
      if(e.num == undefined && e.title == '客服消息'){
        e.num = num
      }
    })
    console.log(this.mulist[2].num)
  },
  computed: {
    computNum () {
      return this.number+16
    }
  },
  components:{museUi,vueForm,tabs,
    'child':{template:'<div>123+{{temp}}+{{aged}}</div>',props:['temp'],
      data(){return {
        aged:20
      }}
    }
  },
  methods:{
    hoverChange(e){
      console.log(e.target.parentNode)
      //e.target.parentNode.style.backgroundColor = '#666'
    },
    changedis(i){
      document.getElementsByClassName('itemchangeChild')[i].style.display = 'none'
    },
    changeBg (i){
      
      console.log(i)
      document.getElementsByClassName('itemchangeChild')[i].style.display = 'block'
    },
    alerted(){
      alert(3)
    },
    getInfo (e) {
      alert(e)
    },
    getJosn:function(){
      console.log(this.msg+this.pwd)
    },
    getNum(e){
      this.del=this.todolist[e].name;
      this.todolist.splice(e,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jifen ul{overflow: hidden;zoom:1;}
.jifen ul li{border-bottom:1px solid #ccc;width:100%;}
.jifen ul li div{float:left;width:30%;text-align: left;text-indent: 2em;}
.dn{display: none;}
h1, h2 {
  font-weight: normal;
}
.por{position: relative;}
.poa{position: absolute;}
ul {
  list-style-type: none;
  padding: 0;
}
.jifen ul li .itemchangeChild{left:0;top:21px;width:100%;background:#aaa;}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.fade-enter-active,.fade-leave-active{
  transition:all 1s;
  
}
.fade-enter,.fade-leave-active{
  transform: translateX(30px);
  opacity:0;
}
.mu-list.mulistinfo{
  width:300px;
  border:1px solid #ccc;
}
.mulistinfo .node{
  width:30px;
  height:20px;
  display: inline-block;
  position: absolute;
  right:50px;
  top:12px;

}
.mulistinfo span{
  color:red;
}
</style>
