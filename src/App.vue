<template>
    <div>
      <ToolBar/>
      <NavgationBar/>
      <Section/>
    </div>
</template>

<script>
  import  ToolBar from './components/ToolBar.vue'
  import  NavgationBar from './components/Navigation-Bar'
  import  Section from './components/Section'
  export default {
    name: 'App',
    components:{ToolBar,NavgationBar,Section},
    methods:{}
  }

</script>

<style >

</style>
