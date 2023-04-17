<template>
  <div class="container text-center">
    <h2>Appointments Today</h2>
    <b-list-group>
      <b-list-group-item
        v-for="(appointment, index) in appointmentsTodayAccepted"
        :key="index"
        class="d-flex justify-content-between align-items-center"
      >
        <div>
          <span>{{ appointment.patientName }}</span>
        </div>
        <div>
          <span class="mr-3">{{ appointment.time }}</span>
          <span>{{ appointment.reason }}</span>
          <b-button variant="outline-success" size="sm" class="ml-3" @click="completeAppointment(index)">Complete</b-button>
        </div>
      </b-list-group-item>
    </b-list-group>

    <h2 class="mt-4">Pending Appointments</h2>
    <b-list-group>
      <b-list-group-item
        v-for="(appointment, index) in appointmentsTodayPending"
        :key="index"
        class="d-flex justify-content-between align-items-center"
      >
        <div>
          <span>{{ appointment.patientName }}</span>
        </div>
        <div>
          <span class="mr-3">{{ appointment.time }}</span>
          <span>{{ appointment.reason }} </span>
          <b-button variant="outline-success" size="sm" class="mr-1" @click="acceptAppointment(index)"> Accept</b-button>
          <b-button variant="outline-danger" size="sm" @click="cancelAppointment(index)"> Cancel</b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointmentsTodayAccepted: [
        {
          patientName: "John Doe",
          time: "10:00 AM",
          reason: "Routine Checkup",
        },
        {
          patientName: "Jane Smith",
          time: "11:30 AM",
          reason: "Flu Symptoms",
        },
      ],
      appointmentsTodayPending: [
        {
          patientName: "Jack Johnson",
          time: "2:00 PM",
          reason: "Fever and Headache",
        },
        {
          patientName: "Jenny Lee",
          time: "3:30 PM",
          reason: "Annual Physical",
        },
      ],
    };
  },
  methods: {
    acceptAppointment(index) {
      // Implement logic to move appointment from 'pending' to 'accepted' array
      // ...
    },
    cancelAppointment(index) {
      // Implement logic to remove appointment from 'pending' array
      // ...
    },
    completeAppointment(index) {
      // Implement logic to move appointment from 'accepted' to 'completed' array
      // ...
    },
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  max-width: 800px;
  padding: 2rem;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
}

.b-list-group-item {
  padding: 1rem 1.5rem;
}

.b-list-group-item .b-img {
  border-radius: 50%;
  object-fit: cover;
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
