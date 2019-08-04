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

      <f7-block strong inset style="background-color: darkgrey">
      <f7-row>
        <f7-col>
          <f7-button >设定温度</f7-button>
          <f7-button >xx度</f7-button>
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
        <f7-col width="30">
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



    <f7-row algin="center">
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

    <f7-row algin="center">
      <f7-col>   自动模式   </f7-col>
      <f7-col>  定时模式      </f7-col>
      <f7-col>   自清洁模式   </f7-col>
      <f7-col>    睡眠模式  </f7-col>
    </f7-row>
  </f7-page>


</template>

<script>
    export default {
        name: "kongtiao"
    }
</script>

<style scoped>

</style>
