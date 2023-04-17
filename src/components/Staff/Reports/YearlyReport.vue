<template>
  <div>
    <h2 class="my-5 text-center">Yearly Report</h2>
    <ChartVue />
  </div>
</template>

<script>
import ChartVue from "../Chart.vue";

export default {
  name: "Reports",
  components: {
    ChartVue,
  },
  data() {
    return {};
  },
};
</script>
