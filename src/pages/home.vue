
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
          <f7-swiper-slide>Slide 1</f7-swiper-slide>
          <f7-swiper-slide>Slide 2</f7-swiper-slide>
          <f7-swiper-slide>Slide 3</f7-swiper-slide>
        </f7-swiper>
        <f7-block-title>设备</f7-block-title>
        <f7-block strong inset style="background-color: darkgrey">
          <f7-row>
            <f7-col class="device">
              <f7-button style="color: black">空调</f7-button>
            </f7-col>
            <f7-col>
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
                <f7-button style="font-size: small" class="fontcolor">温度</f7-button>
              </f7-row>
              <f7-row>
                <f7-button style="font-size: small" class="fontcolor">模式</f7-button>
              </f7-row>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: darkgrey">
          <f7-row>
            <f7-col class="device">
              <f7-button style="color: black;width: 60px" href="/apm/">除湿机</f7-button>
            </f7-col>
            <f7-col>
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
                <f7-button style="font-size: small" class="fontcolor">温度</f7-button>
              </f7-row>
              <f7-row>
                <f7-button style="font-size: small" class="fontcolor">模式</f7-button>
              </f7-row>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: darkgrey">
          <f7-row>
            <f7-col class="device">
              <f7-button style="color: black">灯</f7-button>
            </f7-col>
            <f7-col>
              <f7-icon material="power_settings_new" class="icon1"></f7-icon>
            </f7-col>
            <f7-col class="light">
              <f7-button style="font-size: small" class="fontcolor">回家</f7-button>
            </f7-col>
            <f7-col class="light">
              <f7-button style="font-size: small" class="fontcolor">迎宾</f7-button>
            </f7-col>
            <f7-col class="light">
              <f7-button style="font-size: small" class="fontcolor">浪漫</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: darkgrey">
          <f7-row>
            <f7-col style="background-color: lightslategray">
              <f7-button style="color: black">客厅窗帘</f7-button>
            </f7-col>
            <f7-col>
              <f7-button style="font-size: small" class="fontcolor">一键打开</f7-button>
            </f7-col>
            <f7-col>
              <f7-button style="font-size: small" class="fontcolor">一键关闭</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-icon f7="add_round_fill" style="margin-left: 45%"></f7-icon>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-swiper pagination navigation>
          <f7-swiper-slide>Slide 1</f7-swiper-slide>
          <f7-swiper-slide>Slide 2</f7-swiper-slide>
          <f7-swiper-slide>Slide 3</f7-swiper-slide>
        </f7-swiper>
        <f7-block-title>设备</f7-block-title>
        <f7-block strong inset style="background-color: darkgrey">
          <f7-row>
            <f7-col class="device2">
              <f7-button style="color: black">回家路上</f7-button>
            </f7-col>
            <f7-col>
              <f7-row>开关</f7-row>
              <f7-row><f7-toggle color="blue"></f7-toggle></f7-row>
            </f7-col>
            <f7-col>
              <f7-row>生效时段</f7-row>
              <f7-row>18:00-19:00</f7-row>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: darkgrey">
          <f7-row>
            <f7-col class="device2">
              <f7-button style="color: black">到家</f7-button>
            </f7-col>
            <f7-col>
              <f7-row>开关</f7-row>
              <f7-row><f7-toggle color="blue"></f7-toggle></f7-row>
            </f7-col>
            <f7-col>
              <f7-row>生效时段</f7-row>
              <f7-row>18:00-19:00</f7-row>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: darkgrey">
          <f7-row>
            <f7-col class="device2">
              <f7-button style="color: black">离家</f7-button>
            </f7-col>
            <f7-col>
              <f7-row>开关</f7-row>
              <f7-row><f7-toggle color="blue"></f7-toggle></f7-row>
            </f7-col>
            <f7-col>
              <f7-row>生效时段</f7-row>
              <f7-row>18:00-19:00</f7-row>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-block strong inset style="background-color: darkgrey">
          <f7-row>
            <f7-col class="device2">
              <f7-button style="color: black">自定义</f7-button>
            </f7-col>
            <f7-col>
              <f7-row>开关</f7-row>
              <f7-row><f7-toggle color="blue"></f7-toggle></f7-row>
            </f7-col>
            <f7-col>
              <f7-row>生效时段</f7-row>
              <f7-row>18:00-19:00</f7-row>
            </f7-col>
          </f7-row>
        </f7-block>
        <f7-icon f7="add_round_fill" style="margin-left: 45%"></f7-icon>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        <f7-list media-list>
          <f7-list-item
            title="昵称XXXXX"
            subtitle="你已经使用智能家居X天"
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
    export default{
        data() {
            return {
                isBottom: true,
            };
        }
    }
</script>
