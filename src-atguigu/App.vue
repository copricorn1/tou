<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
            <Add :addComment="addComment"/>
            <List :comments="comments" :deleteComment="deleteComment"/>
      </div>
    </div>
  </div>
</template>

<script>
import Add  from './components/Add'
import  List from './components/List'
export default {
    data(){
      return{
        comments:[//数据定义在那个组件，那么更新组件的行为（方法)就应该写在那个组件（ 这是一个约束）
          {
            name:'Bob',
            content:'Vue 还不错'
          },
          {
            name:'bekka',
            content:'Vue So Easy'
          },
          {
            name:'Alice',
            content:'Vue So So'
          }
        ]
      }
    },
    components:{
      Add,
      List
    },
    methods:{
        //添加评论(由于当前对象不需要调用此方法，而他的子组件需要，所以我们要把这个方法传递过去)
      addComment(comment){
        this.comments.unshift(comment);
      },
      //删除指定下标 的评论
      deleteComment(index){
        this.comments.splice(index,1)
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
