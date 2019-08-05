<template>
  <f7-page>

    <f7-navbar title="智能灯" back-link="Back"></f7-navbar>
<f7-block align="center">
    <f7-row>
      <f7-col width="30" v-on:click="acpower">
        <f7-icon material="power_settings_new" class="icon4" align="center"></f7-icon>
      </f7-col>
    </f7-row>
  <f7-row>
    <f7-col width="100" tablet-width="50">开关</f7-col>
  </f7-row>
</f7-block>
<!--    <f7-block strong inset style="background-color: darkgrey">-->
    <f7-block>

      <f7-row>

        <f7-col>
          <f7-col width="30">
            <f7-icon f7="delete" class="icon2"></f7-icon>
          </f7-col>
        </f7-col>

        <f7-block strong inset style="background-color: white">
          <f7-row>
            <f7-col>

              <f7-button >xx档</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>



        <f7-col>
          <f7-col width="30">
            <f7-icon material="add" class="icon2"></f7-icon>
          </f7-col>
        </f7-col>
      </f7-row>

    </f7-block>

<f7-block>
  <f7-row>
    <f7-col>
      <f7-button style="background-color: cornflowerblue;color: azure">回家模式</f7-button>
    </f7-col>
    <f7-col>
      <f7-button style="background-color: cornflowerblue;color: azure">迎宾模式</f7-button>
    </f7-col>
  </f7-row>

</f7-block>

    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button style="background-color: cornflowerblue;color: azure">浪漫模式</f7-button>
        </f7-col>
        <f7-col>
          <f7-button style="background-color: cornflowerblue;color: azure">自定义模式</f7-button>
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
