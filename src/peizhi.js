export const MQTT_SERVICE = 'mqtts://123.207.167.185:1883';
export default {
  acpowercontrol: function (params) {
    if (params < 0) {
      this.$http.post('http://10.74.138.11:7668//SendJsonToHardware', {
          'ac': '1'
        }
      ).then(function (res) {
        params = 1;
        console.log('成功');
      }, function () {
        console.log('请求失败处理');
      });
    } else {
      this.$http.post('http://10.74.138.11:7668//SendJsonToHardware', {
          'ac': '-1'
        }
      ).then(function (res) {
        params=-1
      }, function () {
        console.log('请求失败处理');
      });
    }
    return params;
  },
  apmpower:function (params) {
    if (params < 0) {
      this.$http.post('http://10.74.138.11:7668//SendJsonToHardware', {
          'ap': '1'
        }
      ).then(function (res) {
        params = 1;
        console.log('成功');
      }, function () {
        console.log('请求失败处理');
      });
    } else {
      this.$http.post('http://10.74.138.11:7668//SendJsonToHardware', {
          'ap': '-1'
        }
      ).then(function (res) {
        params=-1
      }, function () {
        console.log('请求失败处理');
      });
    }
    return params;
  },
  curpower:function (params) {
    if (params < 0) {
      this.$http.post('http://10.74.138.11:7668//SendJsonToHardware', {
          'cur': '1'
        }
      ).then(function (res) {
        params = 1;
        console.log('成功');
      }, function () {
        console.log('请求失败处理');
      });
    } else {
      this.$http.post('http://10.74.138.11:7668//SendJsonToHardware', {
          'cur': '-1'
        }
      ).then(function (res) {
        params=-1
      }, function () {
        console.log('请求失败处理');
      });
    }
    return params;
  },
  lightpower:function (params) {

  }
}
