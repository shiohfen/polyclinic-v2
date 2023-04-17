<template>
  <div>
    <b-row>
      <b-col cols="4">
        <b-card
          class="card"
          :img-src="logo"
          img-alt="Clinic logo"
          img-top
          img-fluid
        >
          <b-card-title class="clickable" @click="edit('clinicName')">
            {{ clinicName }}</b-card-title
          >
          <b-card-text class="clickable" @click="edit('clinicAddress')">
            {{ clinicAddress }}</b-card-text
          >
          <b-card-text class="clickable" @click="edit('clinicPhone')">
            {{ clinicPhone }}</b-card-text
          >
          <b-card-text class="clickable" @click="edit('clinicEmail')">
            {{ clinicEmail }}</b-card-text
          >
        </b-card>
      </b-col>
      <b-col cols="8">
        <b-card class="card">
          <b-card-text class="clickable" @click="edit('clinicDescription')">
            {{ clinicDescription }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-modal v-model="showModal" title="Edit" @ok="save">
      <b-form>
        <b-form-group :label="editing" label-for="edit-input">
          <b-form-input id="edit-input" v-model="editValue"></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "https://dummyimage.com/400x400/000/fff&text=Logo",
      clinicName: "Dummy Clinic",
      clinicAddress: "1234 Main Street, Anytown USA",
      clinicPhone: "555-555-1234",
      clinicEmail: "info@dummyclinic.com",
      clinicDescription:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis ut officiis architecto quos quas expedita quod quaerat sunt minus commodi alias delectus ipsum quidem debitis nemo, ratione sed voluptate!",
      editing: "",
      editValue: "",
      showModal: false,
    };
  },
  methods: {
    edit(prop) {
      if (prop == "clinicName") {
        this.editing = "Clinic Name";
      } else if (prop == "clinicAddress") {
        this.editing = "Clinic Address";
      } else if (prop == "clinicPhone") {
        this.editing = "Clinic Phone";
      }
      this.editValue = this[prop];
      this.showModal = true;
    },
    save() {
      this[this.editing] = this.editValue;
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.clinic-details {
  max-width: 400px;
  margin: 0 auto;
}

.card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transform: translateY(-5px);
  transition: all 0.3s ease-out;
}

.clickable:hover {
  cursor: pointer;
  transform: translateY(-5px);
  transition: all 0.3s ease-out;
}
</style>
