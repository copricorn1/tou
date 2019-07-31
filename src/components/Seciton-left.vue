<template>
  <div class="a">
    <el-row class="tac" >
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1"  @mouseover="toggle">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
          </el-submenu>

          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>

          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="yy">
      <img src="../components/image/rili.png" height="160" width="170" />
    </div>
    <div class="right-menu" v-if="nShow">
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1295.html" target="_blank">乔木</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1296.html" target="_blank">落叶乔木</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1297.html" target="_blank">常绿乔木</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1298.html" target="_blank">灌木</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1299.html" target="_blank">观花类灌木</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1300.html" target="_blank">观果类灌木</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1301.html" target="_blank">观叶类灌木</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1302.html" target="_blank">草本植物</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1303.html" target="_blank">花卉草本植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1304.html" target="_blank">食用草本植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1305.html" target="_blank">药用草本植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1306.html" target="_blank">地被草本植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1307.html" target="_blank">草坪</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1308.html" target="_blank">竹类</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1309.html" target="_blank">藤本植物</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1310.html" target="_blank">一二年生藤本植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1311.html" target="_blank">多年生藤本植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1312.html" target="_blank">藤本花卉植物</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1313.html" target="_blank">湿生植物</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1314.html" target="_blank">水培植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1315.html" target="_blank">水生植物</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1316.html" target="_blank">热带植物</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1317.html" target="_blank">观果类植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1318.html" target="_blank">观叶类植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1319.html" target="_blank">吊挂类植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1348.html" target="_blank">观花类植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1448.html" target="_blank">多肉类植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1449.html" target="_blank">棕榈类植物</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1373.html" target="_blank">种子</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1380.html" target="_blank">花种</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1381.html" target="_blank">草种</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1382.html" target="_blank">菜种</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1383.html" target="_blank">树种</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1496.html" target="_blank">湿生植物种子</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1571.html" target="_blank">药种</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1375.html" target="_blank">种根/种球/种条</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1374.html" target="_blank">种球</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1444.html" target="_blank">种根</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1446.html" target="_blank">种条</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1392.html" target="_blank">迷你植物/植物宠物</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1561.html" target="_blank">迷你植物</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1710.html" target="_blank">植物宠物</a>
        </dd>
      </dl>
      <dl>
        <dt><a href="https://www.zhiwuwang.com/mall/list-1445.html" target="_blank">种苗</a></dt>
        <dd>
          <a href="https://www.zhiwuwang.com/mall/list-1680.html" target="_blank">乔木种苗</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1681.html" target="_blank">灌木种苗</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1682.html" target="_blank">草本种苗</a>
          <em>|</em><a href="https://www.zhiwuwang.com/mall/list-1683.html" target="_blank">藤本种苗</a>
        </dd>
      </dl>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Seciton-left',
    data(){
      return {
        visible:false,
        nShow:false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggle:function () {
        this.nShow =!this.nShow
      }
    }
  }

</script>

<style>
  .yy {
    margin: 2.2rem 0 0 8rem;
  }
  .yy img{
    box-shadow: inset 0 0 8px 0 #f27218;
  }

  .a{
    position: relative;
  }
  .right-menu{
    position: absolute;
    left: 60%;
    top: 0;
    width: 640px;
    height: 510px;
    padding: 10px 20px;
    overflow: hidden;
    border: #eee 1px solid;
    background: #fff;

  }
  .tac .el-col-12 {
    width: 97%;
  }
  .el-col-6 {
    width: 21%;
  }
  .el-menu{
    padding-left: 0;
  }

  ul.el-menu-vertical-demo.el-menu {
    border: none;

   margin-left: 94px;
  }

  .el-submenu {

    margin: 0.3rem;
  }
  .el-menu-item {

    margin: 0.3rem 0;
  }
</style>

