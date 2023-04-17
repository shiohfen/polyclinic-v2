<template>
  <div>
    <nav
      :class="{ sticky: isSticky }"
      class="navbar navbar-expand-lg navbar-light nav-container"
    >
      <router-link class="navbar-brand" to="/">PolyClinic</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="#" v-b-modal.signin-modal>Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
    <SignInModal></SignInModal>
  </div>
</template>

<script>
import SignInModal from "@/components/SignInModal.vue";
export default {
  name: "PolyclinicV21NavBar",
  components: {
    SignInModal,
  },

  data() {
    return {
      isSticky: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>


<style scoped>
.navbar {
  background-color: #fff; /* set a white background color */
  /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);  */
}

.navbar-brand {
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-nav .nav-item .nav-link {
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 1.2rem;
  font-weight: bold;
}

.navbar-nav .nav-item .nav-link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: grey;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.navbar-nav .nav-item .nav-link:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.nav-container {
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1.5rem;
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.8s ease-in-out;
}
</style>
