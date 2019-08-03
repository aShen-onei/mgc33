<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>My App</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-swiper pagination navigation>
      <f7-swiper-slide>Slide 1</f7-swiper-slide>
      <f7-swiper-slide>Slide 2</f7-swiper-slide>
      <f7-swiper-slide>Slide 3</f7-swiper-slide>
    </f7-swiper>
    <f7-block-title>设备</f7-block-title>
    <f7-block color="gray">
      <f7-row>
        <f7-col>空调一</f7-col>
        <f7-col>
          <f7-icon f7="home"></f7-icon>
        </f7-col>
        <f7-col>
          <f7-row>
            <f7-icon f7="chevron_up"></f7-icon>
          </f7-row>
          <f7-row>温度</f7-row>
          <f7-row>
            <f7-icon f7="chevron_down"></f7-icon>
          </f7-row>
        </f7-col>
        <f7-col>
          <f7-button style="font-size: x-small">切换模式</f7-button>
        </f7-col>
        <f7-col>
          <f7-row>
            <f7-button style="font-size: x-small">温度</f7-button>
          </f7-row>
          <f7-row>
            <f7-button style="font-size: x-small">模式</f7-button>
          </f7-row>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<script>
    import mqtt from 'mqtt'
    import {MQTT_SERVICE} from "../peizhi";
    var client;
    const options = {
        connectTimeout: 40000,
        // host:'http://test.mosquitto.org/'
        // port:'1883'
        //host:'123.207.167.185',
        //port:'1883'
        // clean: true
    };
    client = mqtt.connect('ws://123.207.167.185:1883/mqtt');
    //client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt',options);
    //client = mqtt.connect(options);
    client.on('reconnect', (error)=>{
        console.log('正在重新链接',error)
    })
    client.on('error', (error)=>{
        console.log('链接失败',error)
    })
    client.on('connect',(e)=>{
        console.log('链接成功！')
    })
    export default {
        // name:'viewtest',
        // data(){
        //     return{
        //         msg:''
        //     }
        // },
        // created() {
        //     console.log('1111');
        //     this.mqttMSG();
        //     console.log('22222');
        // },
        // methods:{
        //     mqttMSG(){
        //         console.log('11112');
        //         client.on('connect',(e)=>{
        //             console.log('连接成功');
        //             client.public('device', 'wdnmd', {qos:1}, (error)=>{
        //                 if(!error){
        //                     console.log('success')
        //                 }else {
        //                     console.log('fail')
        //                 }
        //             })
        //         })
        //     }
        // }
    }
</script>
