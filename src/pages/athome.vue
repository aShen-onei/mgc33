<template>
  <f7-page>

    <f7-navbar title="到家" back-link="Back"></f7-navbar>

    <f7-block>
      <f7-row>
        <f7-col>
          <f7-row>启用时间</f7-row>
          <f7-row><f7-button style="background-color: darkgray;color: black">18:00-19:00</f7-button></f7-row>
        </f7-col>
        <f7-col>
          <f7-row>模式</f7-row>
          <f7-row>
            <f7-list>
              <f7-list-item radio title="全自动" name="demo-radio" checked></f7-list-item>
              <f7-list-item radio title="弹窗执行" name="demo-radio"></f7-list-item>
              <f7-list-item radio title="手动执行" name="demo-radio"></f7-list-item>
            </f7-list>
          </f7-row>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>如果满足以下条件</f7-col>
      </f7-row>
      <f7-col>
        <f7-button style="background-color: darkgray;color: black">摄像头已经检测到人脸</f7-button>
      </f7-col>
    </f7-block>

    <f7-block>
      <f7-row>
        <f7-col>
          <f7-icon f7="add_round_fill" style="margin-left: 45%"></f7-icon>
        </f7-col>
      </f7-row>

    </f7-block>

    <f7-block>
      <f7-col>执行以下操作</f7-col>
      <f7-col>
        <f7-button style="background-color: darkgray;color: black">打开智能灯，回家模式</f7-button>
      </f7-col>
      <f7-col>
        <f7-button style="background-color: darkgray;color: black">打开窗帘，自动模式</f7-button>
      </f7-col>
    </f7-block>

    <f7-block>
      <f7-row>
        <f7-col>
          <f7-icon f7="add_round_fill" style="margin-left: 45%"></f7-icon>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-col>
      <f7-button style="font-size: small" class="fontcolor">保存</f7-button>
    </f7-col>
  </f7-page>
</template>

<script>
    export default {
        name: "athome"
    }
</script>

<style scoped>

</style>
