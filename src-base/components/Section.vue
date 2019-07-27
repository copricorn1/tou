<template>
  <div>
      <el-row :gutter="10">
        <el-col :span="6"><SecitonLeft/></el-col>
        <el-col :span="12"><SecitonCenter/> </el-col>
        <el-col :span="6"><SecitonRight/></el-col>
      </el-row>
  </div>
</template>

<script>
  import SecitonLeft from './Seciton-left'
  import SecitonCenter from './Section-center'
  import SecitonRight from './Seciton-right'
  export default {
    name: 'Section',
    components:{SecitonLeft,SecitonCenter,SecitonRight}
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
