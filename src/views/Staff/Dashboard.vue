<template>
  <div class="mx-5 p-5">
    <b-tabs pills card vertical :scrollable="true">
      <b-tab active>
        <template #title>
          <b-icon icon="house"></b-icon> &nbsp; Dashboard
        </template>
        <div class="container">
          <div class="row text-center pb-5 border-bottom">
            <div class="col-md-3">
              <div class="card bg-success text-white mb-4 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Appointments Completed</h5>
                  <h1 class="card-text">{{ completed }}</h1>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card bg-warning text-white mb-4 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Appointments On Queue</h5>
                  <h1 class="card-text">{{ queue }}</h1>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card bg-info text-white mb-4 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Pending Appointments</h5>
                  <h1 class="card-text">{{ pending }}</h1>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card bg-primary text-white mb-4 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Doctors</h5>
                  <h1 class="card-text">{{ pending }}</h1>
                </div>
              </div>
            </div>
          </div>
          <Reports />
        </div>
      </b-tab>

      <b-tab>
        <template #title>
          <b-icon icon="file-earmark-text"></b-icon>&nbsp; Clinic Details
        </template>
        <div class="container"><ClinicDetailsVue /></div>
      </b-tab>
      <b-tab>
        <template #title>
          <b-icon icon="people"></b-icon>&nbsp; Doctors
        </template>
        <div><DoctorsVue /></div>
      </b-tab>
      <b-tab>
        <template #title>
          <b-icon icon="calendar-event"></b-icon>&nbsp; Appointments
        </template>
        <div class="container"><AppointmentsVue /></div>
      </b-tab>
      <b-tab>
        <template #title>
          <b-icon icon="file-earmark-richtext"></b-icon>&nbsp; Reports
        </template>
        <div class="container">
          <YearlyReportsVue />
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import YearlyReportsVue from "@/components/Staff/Reports/YearlyReport.vue";
import ClinicDetailsVue from "@/components/Staff/ClinicDetails.vue";
import DoctorsVue from "@/components/Staff/Doctors.vue";
import AppointmentsVue from "@/components/Staff/Appointments.vue";
import Reports from "@/components/Staff/Reports/Reports.vue";

export default {
  name: "PolyclinicV21Dashboard",
  components: {
    YearlyReportsVue,
    ClinicDetailsVue,
    DoctorsVue,
    AppointmentsVue,
    Reports,
  },
  data() {
    return {
      completed: 50,
      queue: 10,
      pending: 5,
    };
  },
};
</script>


<style>
.nav-link {
  color: #333;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
}

.nav-link:hover {
  background-color: #f0f0f0;
  color: #555;
}

.nav-link i {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.card {
  height: 100%;
  transition: transform 0.2s ease-in-out;
}
.card:hover {
  transform: translateY(-5px);
}
</style>

