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
    <f7-toolbar tabbar labels :position="isBottom ? 'bottom' : 'top'">
      <f7-link tab-link="#tab-1" tab-link-active text="首页" icon-f7="home"></f7-link>
      <f7-link tab-link="#tab-2" text="场景" icon-f7="logo_android"></f7-link>
      <f7-link tab-link="#tab-3" text="我的" icon-f7="person"></f7-link>
    </f7-toolbar>
    <f7-tabs>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-swiper pagination navigation>
          <f7-swiper-slide><img src="../pic/2.jpg"> </f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/3.jpg"> </f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/4.jpg"> </f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/5.jpg"> </f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/6.jpg"> </f7-swiper-slide>
        </f7-swiper>
        <f7-block-title>设备</f7-block-title>
        <f7-block strong inset style="background-color: #22aef9">
          <f7-row>
            <f7-col class="device">
              <f7-button style="color: black" href="/kongtiao/">空调</f7-button>
            </f7-col>
            <f7-col v-on:click="acpower">
              <f7-icon material="power_settings_new" class="icon1"></f7-icon>
            </f7-col>
            <f7-col style="width: 30px">
              <f7-row>
                <f7-icon f7="chevron_up"></f7-icon>
              </f7-row>
              <f7-row>
                <f7-col>温度</f7-col>
              </f7-row>
              <f7-row>
                <f7-icon f7="chevron_down"></f7-icon>
              </f7-row>
            </f7-col>
            <f7-col>
              <f7-button class="modchange">切换模式</f7-button>
            </f7-col>
            <f7-col style="margin-top: 5px">
              <f7-row>
                <f7-button style="font-size: small; width: 70px" class="fontcolor">温度</f7-button>
              </f7-row>
              <f7-row>
                <f7-button style="font-size: small ; margin-top: 15px; width: 70px" class="fontcolor">模式</f7-button>
              </f7-row>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: #22aef9">
          <f7-row>
            <f7-col class="device">
              <f7-button style="color: black;width: 60px" href="/apm/">净化器</f7-button>
            </f7-col>
            <f7-col v-on:click="apmpower">
              <f7-icon material="power_settings_new" class="icon1"></f7-icon>
            </f7-col>
            <f7-col style="width: 30px">
              <f7-row>
                <f7-icon f7="chevron_up"></f7-icon>
              </f7-row>
              <f7-row>
                <f7-col>温度</f7-col>
              </f7-row>
              <f7-row>
                <f7-icon f7="chevron_down"></f7-icon>
              </f7-row>
            </f7-col>
            <f7-col>
              <f7-button class="modchange">切换模式</f7-button>
            </f7-col>
            <f7-col style="margin-top: 5px">
              <f7-row>
                <f7-button style="font-size: small; width: 70px" class="fontcolor">温度</f7-button>
              </f7-row>
              <f7-row>
                <f7-button style="font-size: small ;margin-top: 15px; width: 70px" class="fontcolor">模式</f7-button>
              </f7-row>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: #22aef9">
          <f7-row>
            <f7-col class="device">
              <f7-button style="color: black" href="/light/">灯</f7-button>
            </f7-col>
            <f7-col v-on:click="lgtpower">
              <f7-icon material="power_settings_new" class="icon1"></f7-icon>
            </f7-col>
            <f7-col class="light" v-on:click="lgtgreen">
              <f7-button style="font-size: small" class="fontcolor">回家</f7-button>
            </f7-col>
            <f7-col class="light" v-on:click="lgtred">
              <f7-button style="font-size: small" class="fontcolor">迎宾</f7-button>
            </f7-col>
            <f7-col class="light" v-on:click="lgtblue">
              <f7-button style="font-size: small" class="fontcolor">浪漫</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: #22aef9">
          <f7-row>
            <f7-col style="background-color: white">
              <f7-button style="color: black" href="/curtain/">客厅窗帘</f7-button>
            </f7-col>
            <f7-col v-on:click="curpower">
              <f7-button style="font-size: small" class="fontcolor">一键打开</f7-button>
            </f7-col>
            <f7-col v-on:click="curpower">
              <f7-button style="font-size: small" class="fontcolor">一键关闭</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-icon f7="add_round_fill" style="margin-left: 45%"></f7-icon>
      </f7-tab>
      <f7-tab id="tab-2">
        <f7-swiper pagination navigation>
          <f7-swiper-slide><img src="../pic/1.jpg"></f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/2.jpg"> </f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/3.jpg"> </f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/4.jpg"> </f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/5.jpg"> </f7-swiper-slide>
          <f7-swiper-slide><img src="../pic/6.jpg"> </f7-swiper-slide>
        </f7-swiper>
        <f7-block-title medium>场景</f7-block-title>
        <f7-block strong inset class="blockpic1">
          <f7-row>
            <f7-col class="device2">
              <f7-button style="color: white;font-size: 20px;font-weight: bolder;margin-right: 60px" href="/wayhome/">回家路上</f7-button>
            </f7-col>
            <f7-col>
<!--              <f7-row>开关</f7-row>-->
              <f7-row><f7-toggle color="black" v-on:change="wayhomechange" checked style="margin-left: 120px;margin-top: 15px"></f7-toggle></f7-row>
            </f7-col>
<!--            <f7-col>-->
<!--              <f7-row>生效时段</f7-row>-->
<!--              <f7-row>18:00-19:00</f7-row>-->
<!--            </f7-col>-->
          </f7-row>
        </f7-block>
        <f7-block strong inset class="blockpic2">
          <f7-row>
            <f7-col class="device2">
              <f7-button style="color: white;font-size: 20px;font-weight: bolder;margin-right: 100px" href="/athome/">到家</f7-button>
            </f7-col>
            <f7-col>
<!--              <f7-row>开关</f7-row>-->
              <f7-row><f7-toggle color="black" v-on:change="atHome" style="margin-left: 120px;margin-top: 15px"></f7-toggle></f7-row>
            </f7-col>
<!--            <f7-col>-->
<!--              <f7-row>生效时段</f7-row>-->
<!--              <f7-row>18:00-19:00</f7-row>-->
<!--            </f7-col>-->
          </f7-row>
        </f7-block>
        <f7-block strong inset class="blockpic3">
          <f7-row>
            <f7-col class="device2">
              <f7-button style="color: white;font-size: 20px;font-weight: bolder;margin-right: 100px" href="/leavehome/">离家</f7-button>
            </f7-col>
            <f7-col>
<!--              <f7-row>开关</f7-row>-->
              <f7-row><f7-toggle color="black" v-on:change="leavehomechange" checked style="margin-left: 120px;margin-top: 15px"></f7-toggle></f7-row>
            </f7-col>
<!--            <f7-col>-->
<!--              <f7-row>生效时段</f7-row>-->
<!--              <f7-row>18:00-19:00</f7-row>-->
<!--            </f7-col>-->
          </f7-row>
        </f7-block>
        <f7-block strong inset class="blockpic4">
          <f7-row>
            <f7-col class="device2">
              <f7-button style="color: white;font-size: 20px;font-weight: bolder;margin-right: 60px">自定义</f7-button>
            </f7-col>
            <f7-col>
<!--              <f7-row>开关</f7-row>-->
              <f7-row><f7-toggle color="black" style="margin-left: 120px;margin-top: 15px"></f7-toggle></f7-row>
            </f7-col>
<!--            <f7-col>-->
<!--              <f7-row>生效时段</f7-row>-->
<!--              <f7-row>18:00-19:00</f7-row>-->
<!--            </f7-col>-->
          </f7-row>
        </f7-block>
        <f7-icon f7="add_round_fill" style="margin-left: 45%"></f7-icon>
        <input type="text" placeholder="小于500m(回家路上)" name="" id="txt" value="" ref="name"/>
        <f7-button v-on:click="mapfun">确定</f7-button>
        <input type="text" placeholder="防止IP变化" name="" id="txt2" value="" ref="name2"/>
        <f7-button v-on:click="urlchange">确定</f7-button>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-list media-list>
          <f7-list-item
            title="昵称:aShen_onei"
            subtitle="你已经使用智能家居10天"
          >
            <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-item>
          <f7-icon f7="gear"></f7-icon>
          <p>设置</p>
        </f7-list-item>
          <f7-list-item>
            <f7-icon f7="bars"></f7-icon>
            <p>设备列表</p>
          </f7-list-item>
          <f7-list-item>
            <f7-icon f7="bell"></f7-icon>
            <p>提醒</p>
          </f7-list-item>
        </f7-list>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
    import Func from "../peizhi";
    import wayhome from "./wayhome";
    var url="http://10.73.22.65:7668//SendJsonToHardware";
    var ac = -1;
    var apm = -1;
    var cur = -1;
    var lgt = -1;
    var scene1 = -1;
    var scene2 = -1;
    var scene3 = -1;
    var wayhomecheck = 1;
    var athomecheck = 1;
    var leavehomecheck = 1;
    // var lgtred = 22;
    // var lgtgreen =33;
    // var lgtblue = 44;
    function wayHome($this){
        if(wayhomecheck){
            if (scene1 < 0) {
                $this.$http.post(url, {
                        'scene':'1'
                    }
                ).then(function (res) {
                    scene1 = 1;
                }, function (error) {
                    alert(error);
                    console.log('请求失败处理');
                });
            } else {
                $this.$http.post(url, {
                        'scene':'1'
                    }
                ).then(function (res) {
                    scene1=-1
                }, function () {
                    console.log('请求失败处理');
                });
            }
        }else{
            alert('未开启回家路上模式!')
        }
    }
    function leaveHome($this){
        if(leavehomecheck){
            if (scene3 < 0) {
                $this.$http.post(url, {
                        'scene':'3'
                    }
                ).then(function (res) {
                    console.log('成功');
                    scene3 = 1;
                }, function () {
                    console.log('请求失败处理');
                });
            } else {
                $this.$http.post(url, {
                        'scene':'-1'
                    }
                ).then(function (res) {
                    scene3=-1
                }, function () {
                    console.log('请求失败处理');
                });
            }
        }else {
            alert('未开启离家模式！')
        }
    }
    function showPosition(position) {
        var latitude,longitude;
        //定位成功的回调函数，参数position是一个object对象。
        latitude = position.coords.latitude; //提取维度
        longitude =  position.coords.longitude; //提取经度
        console.log(latitude,longitude)
    }
    function showError(error) {
        //定位失败的回调函数。通过提取错误码，得到具体的错误原因
        switch (error.code) {
            case error.PERMISSION_DENIED:
                //GPS权限获取失败
                break;
            case error.POSITION_UNAVAILABLE:
                //无法获取当前位置
                break;
            case error.TIMEOUT:
                //操作超时
                break;
        }
    }
    export default {
        data() {
            return {
                isBottom: true,
                name:"name",
                name2:"name2"
            };
        },
        methods: {
            urlchange(){
                this.name2 = this.$refs.name2.value;
                url=this.$refs.name2.value;
            },
            acpower(){
                if (ac < 0) {
                    this.$http.post(url, {
                            'device':'1',
                            'ac': '1'
                        }
                    ).then(function (res) {
                        ac = 1;
                        console.log('成功');
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                            'device':'1',
                            'ac': '-1'
                        }
                    ).then(function (res) {
                        ac=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            apmpower(){
                if (apm < 0) {
                    this.$http.post(url, {
                        'device':'1',
                        'ap': '1'
                        }
                    ).then(function (res) {
                        apm = 1;
                        console.log('成功');
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                        'device':'1',
                        'ap': '-1'
                        }
                    ).then(function (res) {
                        apm=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            curpower(){
                if (cur < 0) {
                    this.$http.post(url, {
                        'device':'1',
                        'cur': '1'
                        }
                    ).then(function (res) {
                        cur = 1;
                        console.log('成功');
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                        'device':'1',
                        'cur': '-1'
                        }
                    ).then(function (res) {
                        cur=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            lgtpower(){
                if (cur < 0) {
                    this.$http.post(url, {
                        'device':'1',
                        'light': '11'
                        }
                    ).then(function (res) {
                        lgt = 1;
                        console.log('成功');
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                        'device':'1',
                        'light': '-1'
                        }
                    ).then(function (res) {
                        lgt=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            lgtred(){
                if (cur > 0) {
                    this.$http.post(url, {
                        'device':'1',
                        'light': '22'
                        }
                    ).then(function (res) {
                        lgtred = 11;
                        console.log('成功');
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                        'device':'1' ,
                        'light': '-1'
                        }
                    ).then(function (res) {
                        cur=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            lgtgreen(){
                if (cur < 0) {
                    this.$http.post(url, {
                            'device':'1',
                            'light': '33'
                        }
                    ).then(function (res) {
                        lgt = 33;
                        console.log('成功');
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                            'light': '-1'
                        }
                    ).then(function (res) {
                        cur=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            lgtblue(){
                if (cur < 0) {
                    this.$http.post(url, {
                            'device':'1',
                            'light': '44'
                        }
                    ).then(function (res) {
                        lgt = 44;
                        console.log('成功');
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                            'light': '-1'
                        }
                    ).then(function (res) {
                        cur=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            mapfun(){
                this.name = this.$refs.name.value;
                var num = this.$refs.name.value;
                if(num<=500){
                    console.log('回家路上');
                    wayHome(this);
                }else if(num>500){
                    console.log('离家');
                    leaveHome(this);
                }
            },
            wayhomechange(){
                if(wayhomecheck){
                    wayhomecheck = 0;
                }else {
                    wayhomecheck = 1;
                }
            },
            athomechange(){
                if(athomecheck){
                    athomecheck = 0;
                }else{
                    athomecheck = 1;
                }
            },
            leavehomechange(){
                if(leavehomecheck){
                    leavehomecheck = 0;
                }else{
                    leavehomecheck = 1;
                }
            },
            wayHome(){
                if (scene1 < 0) {
                    this.$http.post(url, {
                            'scene':'1'
                        }
                    ).then(function (res) {
                        console.log('成功');
                        scene1 = 1;
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                            'scene':'-1'
                        }
                    ).then(function (res) {
                        scene1=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            atHome(){

                if (scene2 < 0) {
                    this.$http.post(url, {
                            'scene':'2'
                        }
                    ).then(function (res) {
                        console.log('成功');
                        scene2 = 1;
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                            'scene':'-1'
                        }
                    ).then(function (res) {
                        scene2=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            leaveHome(){

                if (scene3 < 0) {
                    this.$http.post(url, {
                            'scene':'3'
                        }
                    ).then(function (res) {
                        console.log('成功');
                        scene3 = 1;
                    }, function () {
                        console.log('请求失败处理');
                    });
                } else {
                    this.$http.post(url, {
                            'scene':'-1'
                        }
                    ).then(function (res) {
                        scene3=-1
                    }, function () {
                        console.log('请求失败处理');
                    });
                }
            },
            test() {
                if (navigator.geolocation) {
                    console.log('获取成功');
                    navigator.geolocation.getCurrentPosition(function (res) {
                        console.log("纬度："+res.coords.latitude+"；经度："+res.coords.longitude);
                    },function (error) {
                        console.log('wdnmdwdnmd')
                    })
                } else {
                    console.log('请获取权限');
                }
                console.log('图标');
            },
        }
    }
</script>
