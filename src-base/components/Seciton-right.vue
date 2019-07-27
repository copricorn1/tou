<template>
  <div>
  <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>

  <el-card class="box-card ccc">
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
  </div>
</template>

<script>
  export default {
    name: 'Seciton-left'
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card[data-v-3603bcea] {
    width: 320px;
  }

  .ccc[data-v-3603bcea] {
    margin-top: 20px;
  }
</style>
