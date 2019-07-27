<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
            <!-- 要用到收集数据 就要v-model      -->
        <input type="text" class="form-control" v-model="name" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" v-model="content" placeholder="评论内容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  //函数和对象的区别   在vue 里 对象是   p:{} 或 p:'ob' 而函数(方法)应该是 data({ return {}})
//方法传递
export default {
  props:{
    addComment:{
    type:Function,
    required:true
    }
  },
  name: 'Add',
  data(){
    return{
      name:'',
      content:''
    }
  },
  methods:{
    add(){
      //1 检查输入的合法性
      const name=this.name.trim()
      const  content=this.content.trim()
      if(!name||!content){
        alert('姓名和内容不能为空')
        return
      }
      //根据输入的对象，封装成一个comment 对象
      const comment={
        name,
        content
      }
      //3.添加到comments 数组里(因为上面已经接收了,所以这里用this 能获取到)
      this.addComment(comment)


      //4 .清除输入
      this.name=''
      this.content=''
    }
  }
}
</script>

<style scoped>

</style>
