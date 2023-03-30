<template>
  <div>
    <div class="home-view">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-md-12 text-center">
            <h3 class="mb-4">Book an Appointment</h3>
            <p class="lead mb-3">Find the care that fits your needs.</p>
          </div>
        </div>
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-8">
            <div class="card shadow-lg">
              <div class="card-body">
                <!-- <b-form>
                  <b-form-group>
                    <b-form-input
                      type="text"
                      size="lg"
                      placeholder="Search for a Clinic"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-form> -->
                <multiselect
                  v-model="selected"
                  :options="options"
                  placeholder="Search for a Clinic"
                  label="name"
                  track-by="id"
                  :searchable="true"
                  :custom-label="customLabel"
                ></multiselect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section1 mb-5">
      <div class="container">
        <h1 class="text-center">
          PolyClinic helps find the right care for you
        </h1>

        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md">
            <img src="@/assets/img3.jpg" width="700" height="auto" />
          </div>
          <div class="col-md text-left">
            <h2>Instant Appointment with Doctors</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, eveniet quibusdam? Eligendi explicabo dolor error
              assumenda inventore nihil ducimus, provident veniam ipsam dolore
              maiores optio alias soluta labore officiis sit.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section2">
      <div class="container">
        <h1 class="text-center">
          Connect with more patients through PolyClinic
        </h1>

        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md text-right">
            <h2>Register your Clinic today</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, eveniet quibusdam? Eligendi explicabo dolor error
              assumenda inventore nihil ducimus, provident veniam ipsam dolore
              maiores optio alias soluta labore officiis sit.
            </p>
          </div>
          <div class="col-md">
            <img src="@/assets/img4.jpg" width="700" height="auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PolyclinicV21HomeView",
  data() {
    return {
      selected: [],
      options: [
        {
          id: 1,
          name: "Clinic A",
          specialization: "Dermatology",
          doctors: ["Dr. John Doe", "Dr. Jane Doe"],
        },
        {
          id: 2,
          name: "Clinic B",
          specialization: "Pediatrics",
          doctors: ["Dr. Mark Smith", "Dr. Mary Smith"],
        },
        {
          id: 3,
          name: "Clinic C",
          specialization: "Cardiology",
          doctors: ["Dr. David Brown", "Dr. Emily Brown"],
        },
      ],
    };
  },
  methods: {
    customLabel(option) {
      return `${option.name} - ${option.specialization}`;
    },
  },
};
</script>


<style scoped>
.home-view {
  background-image: url("../assets/bg1.jpg");
  background-size: cover;
  background-position: center center;
  height: 100vh;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 2rem;
}

h3 {
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
}
</style>
