<template>
  <f7-page>
    <f7-navbar back-link="Back">
      <f7-nav-title>空气净化器</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-f7="more_fill"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <f7-row>
        <f7-col width="70" class="tcShow">
          <p style="border-bottom: 1px solid black">温度:xx度</p>
          <p style="border-bottom: 1px solid black">湿度:xx%</p>
        </f7-col>
        <f7-col width="30">
          <f7-icon material="power_settings_new" class="icon2"></f7-icon>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col class="tcShow">
          <div class="block1">

              <p style="font-size: 15px">室内PM2.5(微克/m³):</p>
              <p style="font-size: 25px">XX</p>

          </div>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>
