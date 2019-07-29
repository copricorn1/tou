<template>
    <div>
      <ToolBar/>
      <NavgationBar/>
      <Section/>
      <Fotter/>
    </div>
</template>

<script>
  import  ToolBar from './components/ToolBar.vue'
  import  NavgationBar from './components/Navigation-Bar'
  import  Section from './components/Section'
  import  Fotter from './components/Fotter'
  export default {
    name: 'App',
    components:{ToolBar,NavgationBar,Section,Fotter},
    methods:{}
  }

</script>

<style >

</style>
