<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  props: {
    width: {
      type: Number,
      default: 400
    ,
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Appointments Done",
            data: [10, 20, 30, 40, 15, 23, 25, 75, 34, 74, 44, 23],
            backgroundColor: "#36A2EB",
          },
          {
            label: "Appointments Declined",
            data: [5, 15, 25, 35, 12, 32, 34, 58, 73, 48, 51, 12],
            backgroundColor: "#FF6384",
          },
          {
            label: "Appointments Canceled",
            data: [2, 10, 20, 30.23, 94, 72, 94, 62, 23, 16, 49],
            backgroundColor: "#FFCE56",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
