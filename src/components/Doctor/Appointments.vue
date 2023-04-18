<template>
  <div class="text-center">
    <b-row>
      <b-col>
        <AcceptedAppointmentsVue />
      </b-col>
      <b-col>
        <PendingAppointmentsVue />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import AcceptedAppointmentsVue from "./AcceptedAppointments.vue";
import PendingAppointmentsVue from "./PendingAppointments.vue";
export default {
  components: { AcceptedAppointmentsVue, PendingAppointmentsVue },
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
}

.b-list-group-item {
  padding: 1rem 1.5rem;
}

.b-list-group-item .btn {
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
}

.b-list-group-item.completed {
  opacity: 0.5;
}

.b-list-group-item.completed .btn {
  display: none;
}
</style>
