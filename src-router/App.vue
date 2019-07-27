<template>
    <div>
      <div>
        <router-link to="/about">o</router-link>
        <router-link to="/home">o</router-link>

        <router-link to="/home/news">News</router-link>
        <router-link to="/home/message">Message</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import router from './router'
  export default {
    name: 'App',
    components:{},
    router
  }

</script>

<style >
div{
  border: 1px purple solid;
}
</style>
