<template>
  <f7-page>


    <f7-navbar title="空调1" back-link="Back"></f7-navbar>
    <f7-block>
      <center>室温：xx度</center>
    </f7-block>
    <f7-block>
      <center>湿度：xx%</center>
    </f7-block>

    <f7-block-title></f7-block-title>

      <f7-block strong inset style="background-color:#22aef9">
      <f7-row>
        <f7-col>
          <f7-button class="fontcolor">设定温度</f7-button>
          <f7-button class="fontcolor" >xx度</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

<f7-block>

    <f7-row>
      <f7-col>
        <f7-col width="30">
          <f7-icon f7="delete" class="icon2"></f7-icon>
        </f7-col>
      </f7-col>
      <f7-col>
        <f7-col width="30" v-on:click="acpower">
          <f7-icon material="power_settings_new" class="icon2"></f7-icon>
        </f7-col>
      </f7-col>
      <f7-col>
        <f7-col width="30">
          <f7-icon material="add" class="icon2"></f7-icon>
        </f7-col>
      </f7-col>
    </f7-row>

</f7-block>


    <f7-row>
      <f7-col>
        <f7-col>
          <f7-col width="15">
            <f7-icon f7="circle" class="icon3"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-col>
      <f7-col>
        <f7-col>
          <f7-col width="15">
            <f7-icon f7="circle" class="icon3"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-col>
      <f7-col>
        <f7-col>
          <f7-col width="15">
            <f7-icon f7="circle" class="icon3"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-col>
      <f7-col>
        <f7-col>
          <f7-col width="15">
            <f7-icon f7="circle" class="icon3"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-col>
    </f7-row>



    <f7-row algin="center" class="kongtiaoIcon">
      <f7-col>   制冷模式   </f7-col>
      <f7-col>  制热模式      </f7-col>
      <f7-col>   抽湿模式   </f7-col>
      <f7-col>    送风模式  </f7-col>
    </f7-row>



    <f7-row>
      <f7-col>
        <f7-col>
          <f7-col width="15">
            <f7-icon f7="circle" class="icon3"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-col>
      <f7-col>
        <f7-col>
          <f7-col width="15">
            <f7-icon f7="circle" class="icon3"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-col>
      <f7-col>
        <f7-col>
          <f7-col width="15">
            <f7-icon f7="circle" class="icon3"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-col>
      <f7-col>
        <f7-col>
          <f7-col width="15">
            <f7-icon f7="circle" class="icon3"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-col>
    </f7-row>

    <f7-row algin="center" class="kongtiaoIcon">
      <f7-col>   自动模式   </f7-col>
      <f7-col>  定时模式      </f7-col>
      <f7-col>   自清洁模式   </f7-col>
      <f7-col>    睡眠模式  </f7-col>
    </f7-row>
  </f7-page>


</template>

<script>
  var url = 'http://10.73.22.65:7668//SendJsonToHardware';
  var ac= -1;
    export default {
        methods:{
           acpower(){
               if (ac < 0)
               {
                   this.$http.post(url,
                       {
                           'device':'1',
                           'ac': '1'
                       }
                   ).then(function (res)
                   {
                       ac = 1;
                       console.log('成功');
                   }, function () {
                       console.log('请求失败处理');
                   });
               } else {
                   this.$http.post(url, {
                           'ac': '-1'
                       }
                   ).then(function (res) {
                       ac=-1
                   }, function () {
                       console.log('请求失败处理');
                   });
               }
           }
               }

        }

</script>

<style scoped>

</style>
