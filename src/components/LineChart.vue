<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
export default {
  mounted() {
   
    var ctx = this.$refs.lineChart.getContext('2d');
    var chart = new this.$_Chart(ctx, { // eslint-disable-line no-unused-vars
      type: 'line',

      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'july'],
        datasets: [{
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      },

      options: {}
     });
  }
}
</script>

<style>

</style>