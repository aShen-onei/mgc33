<template>
  <f7-page>

    <f7-navbar title="离家" back-link="Back"></f7-navbar>

    <f7-block>

<!--        <f7-col>-->
<!--          <f7-row>启用时间</f7-row>-->
<!--          <f7-row><f7-button style="background-color: #22aef9;color: white;margin-top: 15px;">全天</f7-button></f7-row>-->
<!--        </f7-col>-->
          <f7-block-title>模式</f7-block-title>
            <f7-list>
              <f7-list-item radio title="全自动" name="demo-radio" checked></f7-list-item>
              <f7-list-item radio title="弹窗执行" name="demo-radio"></f7-list-item>
              <f7-list-item radio title="手动执行" name="demo-radio"></f7-list-item>
            </f7-list>
      <f7-row>
        <f7-col>如果满足以下条件</f7-col>
      </f7-row>
      <f7-col>
        <f7-button style="background-color: #22aef9;color: white;width: 200px;height: 30px;
    margin-left: 90px;margin-top: 15px;">距离家庭_____km</f7-button>
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
        <f7-button style="background-color: #22aef9;color: white;width: 300px;height: 30px;
    margin-left: 50px;margin-top: 15px;">关闭空调</f7-button>
      </f7-col>
      <f7-col>
        <f7-button style="background-color: #22aef9;color: white;width: 300px;height: 30px;
    margin-left: 50px;margin-top: 15px;">关闭窗帘</f7-button>
      </f7-col>
      <f7-col>
        <f7-button style="background-color: #22aef9;color: white;width: 300px;height: 30px;
    margin-left: 50px;margin-top: 15px;">关闭空气净化器</f7-button>
      </f7-col>
      <f7-col>
        <f7-button style="background-color: #22aef9;color: white;width: 300px;height: 30px;
    margin-left: 50px;margin-top: 15px;">关闭智能灯</f7-button>
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
        name: "leavehome"
    }
</script>

<style scoped>

</style>
