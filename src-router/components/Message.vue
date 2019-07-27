<template>
    <ul>
      <li v-for="(message,index)in messages" :key="message.id">
        <a href="???">{{message.title}}</a>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'News',
    data:function () {
      return {
        messages:[]
      }
    },
    mounted () {
      //模拟ajax请求从后台获取数据
      setTimeout(()=>{
          const messages=[{
            title:'message01',id:1,content:'conten1'
          },
            {
              title:'message02',id:2,content:'conten2'
            },
            {
              title:'message03',id:3,content:'conten3'
            }
          ]
      },1000)
    }
  }
</script>

<style scoped>

</style>
