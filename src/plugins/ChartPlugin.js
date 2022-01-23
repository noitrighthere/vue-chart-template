import Chart from 'chart.js';

export default {
  install(Vue) { // eslint-disable-line no-unused-vars
    Vue.prototype.$_Chart = Chart;
  }
}