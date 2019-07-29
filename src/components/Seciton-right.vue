<template>
  <div>

    <div id="user-info-right">
      <div class="user-info-top">
        <div class="shangchen" >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-morentouxiang"></use>
          </svg>
          <h4>Hi,who-capricorn&nbsp;退出	</h4>

          <h6><a href="">会员中心|</a><a href="">发布信息|</a><a href="">商户</a></h6>

        </div>

        <div class="user-detail">
          <div class="user-modules">
            <h6><span>网站动态</span> <span>我是买家</span> <span>我是卖家</span></h6>
            <div class="u-m-details">
              <ul>
                <li>搜索产品 <span></span></li>

                <li>我的订单 <span></span> </li>

                <li>发布求购</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="user-info-bottom">
        <!--书讯快递-->
<!--          <div class="book_sort">-->
<!--            <div class="book_sort_bg"><img src="" alt="mess" style=" vertical-align:text-bottom;">书讯快递</div>-->
<!--            <div class="book_class">-->
<!--              <div id="dome">-->
<!--                <div id="dome1">-->
<!--                  <ul id="express">-->
<!--                    <li style="margin-top: -17px;">・口述历史权威唐德刚先生国...</li><li style="margin-top: 0px;">・袁伟民与体坛风云：实话实...</li><li style="margin-top: 0px;">・我们台湾这些年：轰动两岸...</li><li style="margin-top: 0px;">・畅销教辅推荐：精品套书50...</li><li style="margin-top: 0px;">・2010版法律硕士联考大纲75...</li><li style="margin-top: 0px;">・计算机新书畅销书75折抢购</li><li style="margin-top: 0px;">・2009年孩子最喜欢的书&gt;&gt;</li><li style="margin-top: 0px;">・弗洛伊德作品精选集59折</li><li style="margin-top: 0px;">・2010考研英语大纲到货75折...</li><li style="margin-top: 0px;">・权威定本四大名著（人民文...</li><li style="margin-top: 0px;">・口述历史权威唐德刚先生国...</li><li style="margin-top: 0px;">・袁伟民与体坛风云：实话实...</li><li style="margin-top: 0px;">・我们台湾这些年：轰动两岸...</li><li style="margin-top: 0px;">・畅销教辅推荐：精品套书50...</li><li style="margin-top: 0px;">・2010版法律硕士联考大纲75...</li><li style="margin-top: 0px;">・计算机新书畅销书75折抢购</li><li style="margin-top: 0px;">・2009年孩子最喜欢的书&gt;&gt;</li><li style="margin-top: 0px;">・弗洛伊德作品精选集59折</li><li style="margin-top: 0px;">・2010考研英语大纲到货75折...</li><li style="margin-top: 0px;">・权威定本四大名著（人民文...</li><li style="margin-top: 0px;">・口述历史权威唐德刚先生国...</li><li style="margin-top: 0px;">・袁伟民与体坛风云：实话实...</li><li style="margin-top: 0px;">・我们台湾这些年：轰动两岸...</li><li style="margin-top: 0px;">・畅销教辅推荐：精品套书50...</li><li style="margin-top: 0px;">・2010版法律硕士联考大纲75...</li><li style="margin-top: 0px;">・计算机新书畅销书75折抢购</li><li style="margin-top: 0px;">・2009年孩子最喜欢的书&gt;&gt;</li><li style="margin-top: 0px;">・弗洛伊德作品精选集59折</li><li style="margin-top: 0px;">・2010考研英语大纲到货75折...</li><li style="margin-top: 0px;">・权威定本四大名著（人民文...</li><li style="margin-top: 0px;">・口述历史权威唐德刚先生国...</li><li style="margin-top: 0px;">・袁伟民与体坛风云：实话实...</li><li style="margin-top: 0px;">・我们台湾这些年：轰动两岸...</li><li style="margin-top: 0px;">・畅销教辅推荐：精品套书50...</li><li style="margin-top: 0px;">・2010版法律硕士联考大纲75...</li><li style="margin-top: 0px;">・计算机新书畅销书75折抢购</li><li style="margin-top: 0px;">・2009年孩子最喜欢的书&gt;&gt;</li><li style="margin-top: 0px;">・弗洛伊德作品精选集59折</li><li style="margin-top: 0px;">・2010考研英语大纲到货75折...</li><li style="margin-top: 0px;">・权威定本四大名著（人民文...</li></ul>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Seciton-left',
  }
</script>

<style >

  .user-modules h6{
    padding: 1.4rem;
  }
  .user-modules span{
    font-size: 20px ;
    margin-right: 2rem;
  }

  .user-modules span:nth-of-type(3){
    margin-right: 0;
  }

.shangchen{
  padding: 3rem;
}
.shangchen h6{
  margin-left: 8rem;
}
.shangchen h4{
  position: relative;
  right:-3rem;
}
.shangchen h4,h6{
  display: inline-table;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: dimgray;
  margin-right: 1rem;
  font-size:3.125rem ;
}
#user-info-right{
  width: 27.5rem;
  height: 56.25rem;
  box-sizing: border-box;
  margin: auto;
}
.user-info-top{
  border: 1px solid white;
  background: red;
  height: 25rem;
  margin-bottom: 0.625rem;
}

.user-info-bottom{
  border: #0000FF 1px solid;
  background: white;
  margin-top: 2.3rem ;
  height: 17.5rem;
}
.u-m-details ul li{
  list-style: none;
  float: left;
  width: 5rem;
  height: 5rem;
  line-height: 16px;
  padding: 14px;
  text-align: center;
  border: #ddd 2px solid;
  border-radius: 50%;
  margin: 0 1.875rem;
}

  .u-m-details ul {
   padding-left: 0;
  }
.u-m-details ul li span{
  float: left;
  width: 38px;
  height: 16px;
  padding: 24px 0;
  margin: 6px 0 0;
  text-align: center;
  font-weight: 700;
  color: #ddd;
  font-family: simsun;
}


  /*书讯快递*/
  #silder {
    width: 220px;
    margin-top: 5px;
  }
  #catList, #content, #silder {
    float: left;
  }
  * {
    margin: 0px;
    padding: 0px;
    font-size: 12px;
    line-height: 20px;
    color: #333;
  }
  .book_sort {
    border: solid 1px #999;
    margin-bottom: 10px;
  }

  .book_sort_bg{
    background-color:#d7eff8;
    padding-left:10px;
    color:#207291;
    font-size:14px;
    height:28px;
    font-weight:bold;
    line-height:30px;
  }
  .book_sort_bottom{
    margin:0px 10px 0px 10px;
    line-height:25px;
  }
  .book_cate{
    padding:10px 0px 0px 10px;
    font-weight:bold;
  }

  #dome{
    overflow:hidden; /*溢出的部分不显示*/
    height:160px;
    padding:5px;
  }
</style>
