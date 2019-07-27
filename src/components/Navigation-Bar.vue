<template>
      <div class="logo-search">

        <el-form :inline="true" :model="formInline" class="demo-form-inline" align="center">
          <el-form-item label="">
            <el-input v-model="formInline.user" placeholder="搜索"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>

        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="首页" name="first"></el-tab-pane>
          <el-tab-pane label="大市场" name="second"></el-tab-pane>
          <el-tab-pane label="商城" name="third"></el-tab-pane>
          <el-tab-pane label="资讯" name="fourth"></el-tab-pane>
          <el-tab-pane label="供应" name="five"></el-tab-pane>
          <el-tab-pane label=" 求购" name="six"></el-tab-pane>
          <el-tab-pane label="植物库  " name="seven"></el-tab-pane>
          <el-tab-pane label="行情" name="eight"></el-tab-pane>
          <el-tab-pane label="知道" name="nine"></el-tab-pane>
          <el-tab-pane label="行业人才" name="ten"></el-tab-pane>
          <el-tab-pane label="公司库" name="eleven"></el-tab-pane>
          <el-tab-pane label="商圈" name="twelve"></el-tab-pane>
        </el-tabs>

      </div>
</template>

<script>
export default {
  name: 'Navigation-Bar',
  data(){
    return {
      activeName:  'first',
      formInline: {
        user: '',
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}


</script>

<style >
.demo-form-inline{
  background: url("../assets/135749521.png") no-repeat 8% center;
}
.el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0 97px 0;
}

</style>

