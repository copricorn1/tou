<template>
  <div id="app">
<!--     <h2>我</h2>-->
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
    <p v-if="gender">男</p>
    <p v-else>女</p>
    <table border="1" >
      <tr><td>姓名</td> <td>年龄</td><td>电话</td><td>地址</td></tr>
      <tr v-for="stu in Students">

        <td>{{stu.name}}</td>
        <td>{{stu.age}}</td>
        <td>{{stu.phone}}</td>
        <td>{{stu.address}}</td>
      </tr>
    </table>

        <!--按下enter 键师把数据保存在元素上（本地）-->
      <p><input v-model="newItem"   v-on:keyup.enter="addTitle()"></p>
      <ul>
        <li v-for="item in liItems">{{item.title}}</li>
      </ul>

  </div>
</template>

<script>
import  Store from './store'
export default {
  name: 'App'

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
