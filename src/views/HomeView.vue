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
                  :max-height="500"
                >
                  <!-- <template slot="singleLabel" slot-scope="props"
                    ><b-img
                      :src="props.option.img"
                      style="max-width: auto; max-height: 5em"
                    ></b-img>
                    <span>{{ props.option.name }}</span>
                  </template> -->

                  <template slot="option" slot-scope="props">
                    <b-row v-b-modal.requestAppointmentModal>
                      <b-img
                        :src="props.option.img"
                        style="max-width: auto; max-height: 5em"
                        class="mx-3"
                      ></b-img>
                      <span
                        >{{ props.option.name }} <br />
                        Specializations: {{ props.option.specialization }}
                        <br />
                        Phone: {{ props.option.phone }} <br />
                        Email: {{ props.option.email }}
                      </span>
                    </b-row>
                  </template>
                </multiselect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section1 mb-5" ref="section1">
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
              Booking an appointment with Polyclinic's doctors is an effortless
              process - clients can simply choose a doctor, input the necessary
              details, and request their appointment with ease.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section2" ref="section2">
      <div class="container">
        <h1 class="text-center">
          Connect with more patients through PolyClinic
        </h1>

        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md text-right">
            <h2>Register your Clinic today</h2>
            <p>
              Looking to grow your healthcare practice and reach more patients?
              Join Polyclinic to create a profile for your clinic and showcase
              your unique offerings.
            </p>
            <a href="#" class="btn-primary" v-b-modal.register-modal
              >Find out more.</a
            >
          </div>
          <div class="col-md">
            <img src="@/assets/img4.jpg" width="700" height="auto" />
          </div>
        </div>
      </div>
    </div>
    <RegisterModal />
    <RequestAppointmentModalVue />
  </div>
</template>

<script>
import RegisterModal from "@/components/RegisterModal.vue";
import RequestAppointmentModalVue from "@/components/RequestAppointmentModal.vue";
export default {
  name: "PolyclinicV21HomeView",
  components: {
    RegisterModal,
    RequestAppointmentModalVue,
  },
  data() {
    return {
      selected: [],

      options: [
        {
          id: 1,
          name: "Clinic A",
          specialization: "Dermatology",
          doctors: ["Dr. John Doe", "Dr. Jane Doe"],
          img: "https://img.freepik.com/free-psd/restaurant-vintage-badge-template-psd-set-remixed-from-public-domain-artworks_53876-141767.jpg?size=626&ext=jpg&uid=R97741882&semt=sph",
        },
        {
          id: 2,
          name: "Clinic B",
          specialization: "Pediatrics",
          doctors: ["Dr. Mark Smith", "Dr. Mary Smith"],
          img: "https://img.freepik.com/premium-vector/traditional-market-logo_688376-5.jpg?size=626&ext=jpg&uid=R97741882&semt=sph",
        },
        {
          id: 3,
          name: "Clinic C",
          specialization: "Cardiology",
          doctors: ["Dr. David Brown", "Dr. Emily Brown"],
          img: "https://img.freepik.com/free-vector/gradient-ap-monogram-logo-design-template_23-2150155818.jpg?size=626&ext=jpg&uid=R97741882&semt=sph",
        },
      ],
    };
  },

  mounted() {
    const section1 = this.$refs.section1;
    const section2 = this.$refs.section2;

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section1.classList.add("animation-started");
          section2.classList.add("animation-started");
          observer.unobserve(entry.target);
        }
      });
    });

    // Start observing the section1 element
    observer.observe(section1);
    observer.observe(section2);
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

.btn-primary {
  display: inline-block;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  background-image: linear-gradient(to right, #0072ff, #00c6ff);
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
}

.btn-primary:hover {
  transform: scale(1.05);
  background-image: linear-gradient(to right, #00c6ff, #0072ff);
}

.section1 {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 1s, transform 2s;
}
.section1.animation-started {
  opacity: 1;
  transform: translateX(0);
}

.section2 {
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 1s, transform 2s;
}
.section2.animation-started {
  opacity: 1;
  transform: translateX(0);
}

@keyframes imageFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-view {
  animation: imageFadeIn 2s forwards;
}
</style>
