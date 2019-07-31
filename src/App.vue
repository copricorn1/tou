<template>
    <div>
      <ToolBar/>
      <NavgationBar/>
      <Section/>
      <SectionOne/>
      <section-two/>
      <Fotter/>
    </div>
</template>

<script>
  import  ToolBar from './components/ToolBar.vue'
  import  NavgationBar from './components/Navigation-Bar'
  import  Section from './components/Section'
  import  Fotter from './components/Fotter'
  import  SectionOne from './components/Seciton-one'
  import  SectionTwo from './components/Seciton-two'
  export default {
    name: 'App',
    components:{ToolBar,NavgationBar,Section,SectionOne,Fotter,SectionTwo},
    methods:{}
  }

</script>

<style scoped >

</style>
