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

    <ModalVue title="kekw" :items="appointments" />
    <div class="row">
      <div class="col">
        <PieChartVue />
      </div>
      <div class="col">
        <LineChart />
      </div>
    </div>
  </div>
</template>

<script>
import PieChartVue from "@/components/Admin/PieChart.vue";
import LineChart from "@/components/Admin/LineChart.vue";
import ModalVue from "@/components/Admin/Modal.vue";
export default {
  name: "PolyclinicV21Dashboard",
  components: {
    PieChartVue,
    ModalVue,
    LineChart,
  },

  data() {
    return {
      appointments: [
        { id: 1, patient: "John Doe", date: "2022-05-01", time: "09:00" },
        { id: 2, patient: "Jane Smith", date: "2022-05-02", time: "14:00" },
        { id: 3, patient: "Bob Johnson", date: "2022-05-03", time: "10:30" },
        { id: 4, patient: "Bob Johnson", date: "2022-05-03", time: "10:30" },
        { id: 5, patient: "Bob Johnson", date: "2022-05-03", time: "10:30" },
        { id: 6, patient: "Bob Johnson", date: "2022-05-03", time: "10:30" },
      ],
    };
  },

  mounted() {},

  methods: {
    showModal() {
      this.$bvModal.show("tableModal");
    },
  },
};
</script>

<style scoped>
.card:hover {
  cursor: pointer;
}
</style>