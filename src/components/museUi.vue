<template>
	<div>
		<mu-tabs :value="theme" @change="changeTheme">
		  <mu-tab title="LIGHT" value="light"/>
		  <mu-tab title="DARK" value="dark"/>
		  <mu-tab title="CARBON" value="carbon"/>
		  <mu-tab title="TEAL" value="teal" class="last"/>
		</mu-tabs>
		<mu-appbar title="Titled">
		  <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
		  <mu-flat-button color="white" label="flat Button" slot="right"/>
		</mu-appbar>
		  <mu-appbar title="Titledd">
    <mu-icon-button icon="close" slot="left"/>
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
      <mu-menu-item title="菜单 4"/>
      <mu-menu-item title="菜单 5"/>
    </mu-icon-menu>
  </mu-appbar>

  <!--  <mu-list>
 <mu-list-item title="图片" disabled>
   <mu-avatar slot="left" src="/images/uicon.jpg"/>
 </mu-list-item>
 <mu-list-item title="图片,自定义大小" disabled>
   <mu-avatar  slot="left" src="/images/uicon.jpg" :size="30"/>
 </mu-list-item>
 <mu-list-item title="图标" disabled>
   <mu-avatar slot="left" icon="folder"/>
 </mu-list-item>
 <mu-list-item title="图标, 自定义大小、颜色" disabled>
   <mu-avatar slot="left" icon="folder" color="orange200" backgroundColor="pink400" :size="30" :iconSize="20"/>
 </mu-list-item>
 <mu-list-item title="文字" disabled>
   <mu-avatar slot="left" color="deepOrange300" backgroundColor="purple500">MB</mu-avatar>
 </mu-list-item>
 </mu-list> -->
<mu-paper style="display: inline-block;margin-right: 16px;">
    <mu-menu>
      <mu-menu-item title="menu 1">
        <mu-badge content="12" slot="after"/>
      </mu-menu-item>
      <mu-menu-item title="menu 2">
        <mu-badge content="old" primary slot="after"/>
      </mu-menu-item>
      <mu-menu-item title="menu 3">
        <mu-badge content="news" secondary slot="after"/>
      </mu-menu-item>
    </mu-menu>
  </mu-paper>
  <mu-paper style="display: inline-block; width: 256px;">
    <mu-list>
      <mu-list-item title="List Item 1">
        <mu-badge content="12" slot="right"/>
      </mu-list-item>
      <mu-list-item title="List Item 2">
        <mu-badge content="old" primary slot="right"/>
      </mu-list-item>
      <mu-list-item title="List Item 3">
        <mu-badge content="news" secondary slot="right"/>
      </mu-list-item>
    </mu-list>
  </mu-paper>
  <mu-paper>
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="recents" title="Recents" icon="restore"/>
    <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite"/>
    <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on"/>
  </mu-bottom-nav>
</mu-paper>
<mu-raised-button @click="openBottomSheet" label="Open Bottom Sheet" />
  <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
    <mu-list @itemClick="closeBottomSheet">
      <mu-sub-header>
        请选择一个
      </mu-sub-header>
      <ul>
      	<li v-for='(item,k) in listArry'><mu-list-item :title="item" @click='getCon(k)'/></li>
      </ul>
     
    </mu-list>
  </mu-bottom-sheet>
  <div class="container">
  <mu-raised-button label="Default" class="demo-raised-button"/>
  <mu-raised-button label="Primary" class="demo-raised-button" primary/>
  <mu-raised-button label="Secondary" class="demo-raised-button" secondary/>
  <mu-raised-button label="Disabled" class="demo-raised-button" disabled/>
  <br/>
  <mu-raised-button label="full Width" fullWidth/>
  <div>
  <mu-icon-button tooltip="default tooltip" icon="error" color='red'/>
  <mu-icon-button tooltip="default tooltip" icon="help"/>
  <mu-icon-button tooltip="default tooltip" icon="clear"/>
  <mu-icon-button tooltip="default tooltip" icon="close"/>
  <mu-icon-button tooltip="default tooltip" icon="add" class='redColor'/>
  <mu-icon-button tooltip="default tooltip" icon="remove"/>
  <mu-icon-button tooltip="default tooltip" icon="people_outline"/>
  <mu-icon-button tooltip="default tooltip" icon="bluetooth"/>
  <mu-icon-button tooltip="bottom-left" tooltipPosition="bottom-left" icon=""/>
  <mu-icon-button tooltip="bottom-right"  tooltipPosition="bottom-right" icon="grade"/>
  <mu-icon-button tooltip="top-left" tooltipPosition="top-left" touch icon="grade"/>
  <mu-icon-button tooltip="top-center" tooltipPosition="top-center" touch icon="grade"/>
  <mu-icon-button tooltip="top-right" tooltipPosition="top-right" touch icon="grade"/>
</div>
</div>
<mu-linear-progress mode="determinate" :value="value"/>
<span>{{value}}%</span>
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
  <mu-flexbox class="mt8">
    <mu-flexbox-item class="flex-demo">
      4
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      5
    </mu-flexbox-item>
  </mu-flexbox>
  <mu-flexbox class="mt8">
    <mu-flexbox-item order="0" class="flex-demo">
      6
    </mu-flexbox-item>
    <mu-flexbox-item order="2" span="200" class="flex-demo">
      7
    </mu-flexbox-item>
    <mu-flexbox-item order="1" class="flex-demo">
      8
    </mu-flexbox-item>
  </mu-flexbox>
  <mu-flexbox class="mt8" orient="vertical">
    <mu-flexbox-item order="0" class="flex-demo">
      9
    </mu-flexbox-item>
    <mu-flexbox-item order="2" class="flex-demo">
      10
    </mu-flexbox-item>
  </mu-flexbox>
<scroll></scroll>

  <div style="width:100px;height:200px;"></div>
	</div>
</template>
<script>
import light from 'muse-ui/dist/theme-default.css'
import dark from 'muse-ui/dist/theme-dark.css'
import carbon from 'muse-ui/dist/theme-carbon.css'
import teal from 'muse-ui/dist/theme-teal.css'
import scroll from './scroll'
	export default{
		data(){
			return {
				value: 0,
				msg:'wer',
				bottomNav: 'recents',
				bottomSheet: false,
				theme: 'light',
				listArry:['阴阳师','贪吃蛇大作战','一划到底','全民斗地主'
				],
				
				themes: {
			        light,
			        dark,
			        carbon,
			        teal
			      }			      
			}
		},
		components:{scroll,
                light:{template:'<div>lightindex</div>'},
                dark:{template:'<div>darkindex</div>'},
                carbon:{template:'<div>carbonindex</div>'},
                teal:{template:'<div>tealindex</div>'},
    },
		created () {
			this.timer = setTimeout(() => {
				this.value += 10
				if (this.value > 100) this.value = 0
			}, 1000)
		},
		
		beforeDestroy () {
			clearInterval(this.timer)
		},
		 methods:{
		 	getCon(i){
		 		alert(this.listArry[i])
		 	},
		 	closeBottomSheet () {
		 		this.bottomSheet = false
		 	},
		 	openBottomSheet () {
		 		this.bottomSheet = true
		 	},
		 	handleChange(val){this.bottomNav = val},
		 	changeTheme (theme) {
		 		this.theme = theme
        this.$route.push()
		 		const styleEl = this.getThemeStyle()
		 		styleEl.innerHTML = this.themes[theme] || ''
		 	},
		 	getThemeStyle () {
		 		const themeId = 'muse-theme'
		 		let styleEl = document.getElementById(themeId)
		 		if (styleEl) return styleEl
		 			styleEl = document.createElement('style')
		 		styleEl.id = themeId
		 		document.body.appendChild(styleEl)
		 		return styleEl
		 	}

		 
		}
	}
</script>
<style lang='less'>
@import "../../node_modules/muse-ui/less/vars.less";
/* @import "../../node_modules/muse-ui/less/theme.less"; // 主题相关的样式 */

.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
ul{
	li{list-style: none;}
}
.mt8 {
  margin-top: 8px;
}
.flex-demo {
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
}
.mu-icon-button.redColor{
  color:#ffaa00;
}

</style>
