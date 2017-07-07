<template>
	<div>
		<mu-tabs class="fr" :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="TAB1" @click='showMsg'/>
      <mu-tab value="tab2" title="TAB2"/>
      <mu-tab value="tab3" title="TAB3"/>
    </mu-tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export  default {	
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  created () {

  },
  computed () {

  },
  mounted () {
    
  },
  methods: {
    showMsg () {

    },
    handleTabChange (val) {
      this.activeTab = val
      this.$router.push({ path: '/' + val })
    }
  }
	}
</script>
<style>
	.fr{float:right;}
</style>