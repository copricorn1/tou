<template>
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <ul class="nav navbar-nav " >
        <li class="h_far"><a href="#">收藏本页</a></li>
        <li class="h_phone"><a href="">手机版 </a></li>
        <li class="h_qrcode"><a href=""> 二维码</a></li>
        <li class="h_cart"><a href="">购物车</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" >
        <li><a href="#">会员登录&nbsp;&nbsp;|</a></li>
        <li><a href="#">免费注册&nbsp;&nbsp;| </a></li>
        <li><a href="#"> 忘记密码</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style scoped>
  .h_far{
    background:url('image/ico-fav.png')no-repeat 0 center ;
    padding: 0 6px 0 15px;
  }
  .h_phone{
    background:url('image/ico-mobile.png')no-repeat 0 center ;
    padding: 0 6px 0 15px;
  }
  .h_qrcode{
    background:url('image/ico-qrcode.png')no-repeat 0 center ;
    padding: 0 6px 0 15px;
  }
  .h_cart{
    background:url('image/ico-cart.png')no-repeat 0 center ;
    padding: 0 6px 0 15px;
  }
</style>
