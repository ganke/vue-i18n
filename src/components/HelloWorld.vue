<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="box">
      <li @click="changeLand('ru-RU')">俄语</li>
      <li @click="changeLand('zh-CN')">中文</li>
      <li @click="changeLand('en')">英语</li>
      <li @click="changeLand('es')">傻语</li>
    </ul>
    <div>
      我就看看是不是可以了 {{$t("title.indexName")}}
      还是这里  {{$t('creditfile.comment_2')}}
      
    </div>
    <span v-text="$t('breadName.orderCar')"></span>
  </div>
</template>
<style>
  .box{
    display:flex;
  }
</style>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    changeLand(type){
      this.$i18n.locale = type;
    }
  },
  mounted(){
    
    console.log('啊哈哈哈');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
