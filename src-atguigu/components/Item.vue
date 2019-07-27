<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
  import  List from './List'
  export default {
    name: 'Item',
    props:{
      comment:Object,
      deleteComment:{
        type:Function,
        required:true
      },
      index:Number
    },
    methods:{
        deleteItem(){
          //去除其他对象里的得到的方法和值
          const {comment,index,deleteComment}=this
                    /*这里注意用到了反引号 */
          if(window.confirm(`确定删除${comment.name}的评论吗`)){
                deleteComment(index)
          }
        }
    }
  }
</script>

<style scoped>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
