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
        <f7-col width="30" v-on:click="acpower">
          <f7-icon material="power_settings_new" class="icon2"></f7-icon>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col class="tcShow">
          <div class="block1">
              <p style="font-size: 15px;color: white">室内PM2.5(微克/m³):</p>
              <p style="font-size: 25px;color: white">XX</p>
          </div>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <f7-row>
            <f7-button>优</f7-button>
          </f7-row>
          <f7-row>室内空气</f7-row>
        </f7-col>
        <f7-col>
          <f7-row>
            <f7-button>60%</f7-button>
          </f7-row>
          <f7-row>滤网过滤</f7-row>
        </f7-col>
        <f7-col>
          <f7-row>
            <f7-button>优</f7-button>
          </f7-row>
          <f7-row>异味指数</f7-row>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col class="tcShow">
          <div class="block1">
            <p style="font-size: 15px;color: white">室内PM2.5(微克/m³):</p>
            <p style="font-size: 25px;color: white">XX</p>
          </div>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <f7-row>
            <f7-icon f7="bolt"></f7-icon>
          </f7-row>
          <f7-row>自动</f7-row>
        </f7-col>
        <f7-col>
          <f7-row>
            <f7-icon f7="hand_alt"></f7-icon>
          </f7-row>
          <f7-row>手动</f7-row>
        </f7-col>
        <f7-col>
        <f7-row><f7-icon f7="add"></f7-icon></f7-row>
        <f7-row>风速加</f7-row>
        </f7-col>
        <f7-col>
          <f7-row><f7-icon f7="delete"></f7-icon></f7-row>
          <f7-row>风速减</f7-row>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <f7-row><f7-icon f7="sort_up"></f7-icon></f7-row>
          <f7-row>加湿</f7-row>
        </f7-col>
        <f7-col>
          <f7-row><f7-icon f7="time"></f7-icon></f7-row>
          <f7-row>定时</f7-row>
        </f7-col>
        <f7-col>
          <f7-row><f7-icon f7="close"></f7-icon></f7-row>
          <f7-row>杀菌</f7-row>
        </f7-col>
        <f7-col>
          <f7-row><f7-icon f7="bulb"></f7-icon></f7-row>
          <f7-row>睡眠</f7-row>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
    export default {
        methods:{
            acpower(){
                if (ac < 0)
                {
                    this.$http.post('http://10.74.138.11:7668//SendJsonToHardware',
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
                    this.$http.post('http://10.74.138.11:7668//SendJsonToHardware', {
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
