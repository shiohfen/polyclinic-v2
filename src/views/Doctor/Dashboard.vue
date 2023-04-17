<template>
  <div class="container">
    <b-row>
      <b-col cols="5">
        <!-- First column content goes here -->
      </b-col>
      <b-col cols="7">
        <AppointmentsVue />
      </b-col>
    </b-row>
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