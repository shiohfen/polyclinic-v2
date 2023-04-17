<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Pie } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "PieChart",
  components: {
    Pie,
  },
  props: {
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      chartData: {
        labels: ["Appointments Completed", "Appointments Canceled", "Appointments Declined","Doctors"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF","#c97ce6"],
            data: [40, 20, 80,20],
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
