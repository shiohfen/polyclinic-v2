<template>
  <div>
    <button @click="showModal = true" class="btn btn-primary">Open Modal</button>

    <b-modal v-model="showModal" title="Request Appointment" ok-title="Request">
      <div class="form-group">
        <label for="doctor">Select Doctor:</label>
        <multiselect v-model="selectedDoctor" :options="doctors" :close-on-select="true" :clear-on-select="false" :preserve-search="true" placeholder="Search for a doctor..."></multiselect>
      </div>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" v-model="name">
      </div>
      <div class="form-group">
        <label for="email">Concerns:</label>
        <input type="email" class="form-control" id="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" class="form-control" id="phone" v-model="phone">
      </div>
    </b-modal>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { BModal } from 'bootstrap-vue'

export default {
  components: {
    Multiselect,
    BModal
  },
  data() {
    return {
      showModal: false,
      selectedDoctor: null,
      doctors: [
        { id: 1, name: 'Dr. John Smith' },
        { id: 2, name: 'Dr. Jane Doe' },
        { id: 3, name: 'Dr. James Johnson' },
      ],
      name: '',
      email: '',
      phone: '',
    }
  },
  methods: {
    submitForm() {
      // Perform form validation and submission here
      console.log('Request submitted!')
      this.showModal = false
    }
  }
}
</script>
