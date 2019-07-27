<template>
    <div>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <el-row>
              <el-col :span="24"><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
        <div class="im0a market">
          <a  target="_blank"><img src="./image/market-huamu.jpg" title=""></a>
          <a   target="_blank"><img src="./image/market-chaye.jpg" height="202" width="100"/></a>
          <a  target="_blank"> <img src="./image/market-zhongyaocai.jpg" height="202" width="100"/></a>
          <a target="_blank"><img src="./image/market-shuiguo.jpg" height="202" width="100"/></a>
          <a    target="_blank"><img src="./image/market-shucai.jpg" height="202" width="100"/></a>
          <a  target="_blank"><img src="./image/market-shicai.jpg" height="202" width="100"/></a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Section-center',
    data(){
      return {
        imgList: [
          {id: 0,name:'构思', idView: require('../assets/085840571.jpg')},
          {id: 1, name: '详情', idView: require('../assets/134344771.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/143917681.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/162004671.jpg')}
        ]

      }
    }
  }
</script>

<style >
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .im0a {
    width: 660px;
    height: 212px;
    margin-top: 20px;
    background: #fff
  }

  .im0a a {
    width: 100px;
    height: 202px;
    margin: 5px;
    float: left;
    overflow: hidden
  }

  .im0a img {
    width: 100px;
    height: 202px;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out
  }

  .im0a img:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05)
  }

</style>
