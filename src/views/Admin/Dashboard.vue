<template>
  <div class="container">
    <div class="row text-center pb-3 border-bottom justify-content-md-center">
      <div class="col-md-3">
        <div class="card bg-info text-white mb-4 shadow-sm" @click="showModal">
          <div class="card-body">
            <h5 class="card-title">
              Pending <br />
              Clinics
            </h5>
            <h1 class="card-text">2</h1>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div
          class="card bg-success text-white mb-4 shadow-sm"
          @click="showModal"
        >
          <div class="card-body">
            <h5 class="card-title">
              Active <br />
              Clinics
            </h5>
            <h1 class="card-text">20</h1>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div
          class="card bg-warning text-white mb-4 shadow-sm"
          @click="showModal"
        >
          <div class="card-body">
            <h5 class="card-title">
              Archived
              <br />
              Clinics
            </h5>
            <h1 class="card-text">3</h1>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-info text-white mb-4 shadow-sm" @click="showModal">
          <div class="card-body">
            <h5 class="card-title">
              Total
              <br />
              Users
            </h5>
            <h1 class="card-text">3</h1>
          </div>
        </div>
      </div>
    </div>

    <div>
      <PieChartVue />
    </div>
  </div>
</template>

<script>
import PieChartVue from "@/components/Admin/PieChart.vue";
export default {
  name: "PolyclinicV21Dashboard",
  components: {
    PieChartVue,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    showModal() {
      console.log("show Modal Clicked");
    },
  },
};
</script>

<style scoped>
.card:hover {
  cursor: pointer;
}
</style>