<template>
    <f7-page>
      <f7-navbar back-link="Back">
        <f7-nav-title>智能窗帘</f7-nav-title>
        <f7-nav-right>
          <f7-link icon-f7="more_fill"></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block-title medium>模式</f7-block-title>
      <f7-list>
        <f7-list-item radio title="全自动" name="mode-radio" checked></f7-list-item>
        <f7-list-item radio title="手动" name="mode-radio"></f7-list-item>
      </f7-list>
      <f7-row>
        <f7-col class="tcShow">
          <div class="block1" style="height: 40px">
            <p style="font-size: 25px">{{opendisgree}} %开启</p>
          </div>
        </f7-col>
      </f7-row>
      <f7-list simple-list>
        <f7-list-item>
          <f7-list-item-cell class="width-auto flex-shrink-0">
            <f7-icon ios="f7:circle" aurora="f7:circle" md="material:brightness_low"></f7-icon>
          </f7-list-item-cell>
          <f7-list-item-cell class="flex-shrink-3">
            <f7-range
              :min="0"
              :max="100"
              :step="1"
              :value="50"
              :label="true"
              color="black"
              @range:change="onPriceChange"
            ></f7-range>
          </f7-list-item-cell>
          <f7-list-item-cell class="width-auto flex-shrink-0">
            <f7-icon ios="f7:circle_half" aurora="f7:circle_half" md="material:brightness_high"></f7-icon>
          </f7-list-item-cell>
        </f7-list-item>
      </f7-list>
    </f7-page>
</template>

<script>
    export default {
        data() {
            return {
                opendisgree:50,
            };
        },
        methods:{
            onPriceChange(values) {
                this.opendisgree = values;
            },
        }
    }
</script>

<style scoped>

</style>
