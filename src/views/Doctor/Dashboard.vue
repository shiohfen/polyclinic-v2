<template>
  <div class="container">
    <div class="row text-center pb-3 border-bottom justify-content-md-center">
      <div class="col-md-3">
        <div class="card bg-success text-white mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">
              Appointments <br />
              Today
            </h5>
            <h1 class="card-text">2</h1>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-warning text-white mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">
              Pending <br />
              Appointments
            </h5>
            <h1 class="card-text">20</h1>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-info text-white mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">
              Appointments
              <br />
              Completed
            </h5>
            <h1 class="card-text">3</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <AppointmentsVue />
    </div>

    <!-- <b-row>
      <b-col cols="5">
      </b-col>
      <b-col cols="7">
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
import AppointmentsVue from "@/components/Doctor/Appointments.vue";
export default {
  name: "PolyclinicV21Dashboard",
  components: {
    AppointmentsVue,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>