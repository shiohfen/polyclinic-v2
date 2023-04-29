<template>
  <div>
    <b-modal id="requestAppointmentModal" title="Request Appointment" ok-title="Request Appointment">
      <b-form-group label="Select Doctor:">
        <multiselect
          v-model="selectedDoctor"
          :options="doctors"
          :close-on-select="true"
          :clear-on-select="false"
          :preserve-search="true"
          placeholder="Search for a doctor..."
        ></multiselect>
      </b-form-group>
      <b-form-group label="Name:">
        <b-input-group>
          <b-input-group-prepend is-text>
            <i class="fa-solid fa-user"></i>
          </b-input-group-prepend>
          <b-form-input v-model="name" placeholder="Full Name"></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group label="Concerns:">
        <b-input-group>
          <b-input-group-prepend is-text>
            <i class="fa-solid fa-file-circle-question"></i>
          </b-input-group-prepend>
          <b-form-input
            v-model="concerns"
            type="text"
            placeholder="Concerns"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group label="Phone:">
        <b-input-group>
          <b-input-group-prepend is-text>
            <i class="fa-solid fa-phone"></i>
          </b-input-group-prepend>
          <b-form-input
            v-model="phone"
            type="tel"
            placeholder="Contact Number"
          ></b-form-input>
        </b-input-group>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      selectedDoctor: null,
      doctors: [
        { id: 1, name: "Dr. John Smith" },
        { id: 2, name: "Dr. Jane Doe" },
        { id: 3, name: "Dr. James Johnson" },
      ],
      name: "",
      concerns: "",
      phone: "",
    };
  },
  methods: {
    submitForm() {
      // Perform form validation and submission here
      console.log("Request submitted!");
    },
  },
};
</script>
