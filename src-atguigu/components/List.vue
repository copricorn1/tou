<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment,index) in comments"  :index="index" :key="index" :comment="comment" :deleteComment="deleteComment"/>
    </ul>
  </div>
</template>

<script>
  //props 声明接收属性  这个属性就会成为组件对象的属性 (想要接收父组件传递的值)
  import  Item from './Item'
  export default{
    name: 'List',
    props:['comments','deleteComment'],
    components:{
      Item
    }
  }
</script>

<style scoped>
  .reply {
    margin-top: 0;
  }

</style>
