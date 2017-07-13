# webvue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



ref是挂载元素的基础上运行的
所以 按照 vue的生命周期 在created时是无效的
通过父组件
<son4 @child-tell='listenTo' :target="passRef" ref='childRef'></son4>
   mounted () {
    this.$refs.childRef.date = ['wsxeeed','edcdddd','rfvffffd']
  }
   methods: {
    refButton () {
      this.$refs.childRef.chilDn('我是父元素传过来的')
    }
   }
  1，可以修改 son4组件中的data里的date值
  2，可以访问son4组件methods中的chilDn方法     this.$refs.childRef.chilDn ('我是父元素传过来的')
  3, 可以操作DOM元素this.$refs.$el


watchJson:
通过watch监控 数组和对象属性发生变化
new和old都是指向改变后的数据 即new == old（引用数据 存储的是地址 而非数据本身）
通过this.Array[2] == '', 发现watch无法观测到数据发生变化