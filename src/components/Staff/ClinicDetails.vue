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
          <b-card-title class="clickable">{{ clinicName }}</b-card-title>
          <b-card-text class="clickable">{{ clinicAddress }}</b-card-text>
          <b-card-text class="clickable">{{ clinicPhone }}</b-card-text>
          <b-card-text class="clickable">{{ clinicEmail }}</b-card-text>
        </b-card>
      </b-col>
      <b-col cols="8">
        <b-card class="card">
          <b-card-text class="clickable">{{ clinicDescription }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      logo: "https://dummyimage.com/400x400/000/fff&text=Logo",
      clinicName: "Dummy Clinic",
      clinicAddress: "1234 Main Street, Anytown USA",
      clinicPhone: "555-555-1234",
      clinicEmail: "info@dummyclinic.com",
      clinicDescription:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas blanditiis ut officiis architecto quos quas expedita quod quaerat sunt minus commodi alias delectus ipsum quidem debitis nemo, ratione sed voluptate!",
    };
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
