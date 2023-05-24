<template>
  <b-modal id="register-modal" title="Register" size="lg" hide-footer>
    <div v-if="!form.isStaffModal">
      <form @submit.prevent="form.isStaffModal = true" class="container">
        <div class="text-center" v-if="form.logoPreview.length">
          <b-img
            :src="form.logoPreview"
            alt="Clinic Logo"
            rounded="circle"
            thumbnail
            fluid
            accept="image/*"
            center
            style="max-width: 15em; max-height: auto"
          ></b-img>
        </div>

        <div class="form-group">
          <label for="clinicName">Clinic Name:</label>
          <b-input-group>
            <b-input-group-prepend is-text>
              <i class="fa-regular fa-building"></i>
            </b-input-group-prepend>
            <b-form-input
              id="clinicName"
              type="text"
              v-model.trim="form.clinicName"
              placeholder="Enter Clinic Name"
              :state="!form.clinicName ? null : $v.form.clinicName.required"
            >
            </b-form-input>
          </b-input-group>

          <b-form-invalid-feedback
            v-if="!form.clinicName ? null : !$v.form.clinicName.required"
            :state="$v.form.clinicName.required"
          >
            Clinic Name is required
          </b-form-invalid-feedback>

          <!-- <div v-if="!$v.form.clinicName.$dirty" class="invalid-feedback">
            <i class="fas fa-exclamation-circle"></i> Clinic name is required.
          </div> -->
          <!-- <div
            v-if="$v.form.clinicName.$dirty && !$v.form.clinicName.required"
            class="invalid-feedback"
          >
            <i class="fas fa-exclamation-circle"></i> Clinic name is required.
          </div> -->
        </div>

        <div class="form-group">
          <label for="clinicAddress">Clinic Address:</label>
          <b-input-group>
            <b-input-group-prepend is-text>
              <i class="fa-solid fa-location-dot"></i>
            </b-input-group-prepend>
            <b-form-input
              id="clinicAddress"
              type="text"
              v-model.trim="form.clinicAddress"
              placeholder="Enter Clinic Address"
              :state="
                !form.clinicAddress ? null : $v.form.clinicAddress.required
              "
            ></b-form-input>
          </b-input-group>

          <b-form-invalid-feedback
            v-if="!form.clinicAddress ? null : !$v.form.clinicAddress.required"
            :state="$v.form.clinicAddress.required"
          >
            Clinic Address is required
          </b-form-invalid-feedback>

          <!-- <div v-if="!$v.form.clinicAddress.$dirty" class="invalid-feedback">
            <i class="fas fa-exclamation-circle"></i> Clinic address is
            required.
          </div>
          <div
            v-if="
              $v.form.clinicAddress.$dirty && !$v.form.clinicAddress.required
            "
            class="invalid-feedback"
          >
            <i class="fas fa-exclamation-circle"></i> Clinic address is
            required.
          </div> -->
        </div>

        <b-form-group label="Logo" label-for="logo">
          <b-input-group>
            <b-input-group-prepend is-text>
              <i class="fas fa-file-image"></i>
            </b-input-group-prepend>
            <b-form-file
              id="logo"
              accept=".jpg, .png"
              @change="onLogoChange"
            ></b-form-file>
            <b-form-invalid-feedback
              v-if="!form.logo ? null : !form.logo"
              class="d-block"
              >Please select a logo file.</b-form-invalid-feedback
            >
            <b-form-valid-feedback
              v-else-if="!form.logo ? null : form.logo"
              class="d-block"
              >Logo file selected.</b-form-valid-feedback
            >
          </b-input-group>
        </b-form-group>

        <b-form-group label="Proof of Legitimacy" label-for="legitimacy">
          <b-input-group>
            <b-input-group-prepend is-text>
              <i class="fas fa-file-pdf"></i>
            </b-input-group-prepend>
            <b-form-file
              id="legitimacy"
              @change="onLegitmacyChange"
              accept=".pdf .jpg .png"
            ></b-form-file>
            <b-form-invalid-feedback
              v-if="!form.legitimacy ? null : !form.legitimacy"
              class="d-block"
              >Please select a PDF/JPG/PNG file as proof of
              legitimacy.</b-form-invalid-feedback
            >
            <b-form-valid-feedback
              v-else-if="!form.legitimacy ? null : form.legitimacy"
              class="d-block"
              >Proof of legitimacy file selected.</b-form-valid-feedback
            >
          </b-input-group>
        </b-form-group>

        <div class="d-flex justify-content-end">
          <div class="ml-auto">
            <b-btn
              class="btn btn-success mr-1"
              variant="primary"
              @click="$bvModal.hide('register-modal')"
              >Cancel</b-btn
            >
            <b-btn class="btn btn-primary" variant="primary" type="submit"
              >Next</b-btn
            >
          </div>
        </div>
      </form>
    </div>

    <div v-if="form.isStaffModal">
      <form @submit.prevent="onSubmit" class="container">
        <div class="form-group">
          <label for="staffName">Staff Name:</label>
          <b-input-group>
            <b-input-group-prepend is-text>
              <i class="fa-solid fa-user-tie"></i>
            </b-input-group-prepend>
            <b-form-input
              id="staffName"
              type="text"
              placeholder="Enter Staff Name"
              v-model.trim="form.staffName"
              :state="!form.staffName ? null : $v.form.staffName.required"
            ></b-form-input>
          </b-input-group>

          <b-form-invalid-feedback
            v-if="!form.staffName ? null : !$v.form.staffName.required"
            :state="$v.form.staffName.required"
          >
            Staff name is required
          </b-form-invalid-feedback>
          <!-- <div v-if="!$v.form.staffName.$dirty" class="invalid-feedback">
            <i class="fas fa-exclamation-circle"></i> Staff name is required.
          </div>
          <div
            v-if="$v.form.staffName.$dirty && !$v.form.staffName.required"
            class="invalid-feedback"
          >
            <i class="fas fa-exclamation-circle"></i> Staff name is required.
          </div> -->
        </div>

        <div class="form-group">
          <label for="staffEmail">Staff Email:</label>
          <b-input-group>
            <b-input-group-prepend is-text>
              <i class="fa-regular fa-envelope"></i>
            </b-input-group-prepend>
            <b-form-input
              id="staffEmail"
              type="email"
              placeholder="Enter Staff Email"
              v-model.trim="form.staffEmail"
              :state="
                !form.staffEmail
                  ? null
                  : $v.form.staffEmail.required && $v.form.staffEmail.email
              "
            ></b-form-input>
          </b-input-group>

          <b-form-invalid-feedback
            v-if="!form.staffEmail ? null : !$v.form.staffEmail.required"
            :state="$v.form.staffEmail.required"
          >
            Email is required
          </b-form-invalid-feedback>

          <b-form-invalid-feedback
            v-if="!form.staffEmail ? null : !$v.form.staffEmail.email"
            :state="$v.form.staffEmail.email"
          >
            Email is invalid
          </b-form-invalid-feedback>

          <!-- <div v-if="!$v.form.staffEmail.$dirty" class="invalid-feedback">
            <i class="fas fa-exclamation-circle"></i> Staff email is required.
          </div>
          <div
            v-if="$v.form.staffEmail.$dirty && !$v.form.staffEmail.email"
            class="invalid-feedback"
          >
            <i class="fas fa-exclamation-circle"></i> Invalid email address.
          </div> -->
        </div>

        <div class="form-group">
          <label for="staffPassword">Staff Password:</label>
          <b-input-group>
            <b-input-group-prepend is-text>
              <i class="fa-solid fa-lock"></i>
            </b-input-group-prepend>
            <b-form-input
              id="staffPassword"
              type="password"
              placeholder="Enter Staff Password"
              v-model.trim="form.staffPassword"
              :state="
                !form.staffPassword
                  ? null
                  : $v.form.staffPassword.required &&
                    $v.form.staffPassword.minLength
              "
            ></b-form-input>
          </b-input-group>

          <b-form-invalid-feedback
            v-if="!form.staffPassword ? null : !$v.form.staffPassword.required"
            :state="$v.form.staffPassword.required"
          >
            Staff Password is required
          </b-form-invalid-feedback>

          <b-form-invalid-feedback
            v-if="!form.staffPassword ? null : !$v.form.staffPassword.minLength"
            :state="$v.form.staffPassword.minLength"
          >
            Staff Password should be more than 8 characters
          </b-form-invalid-feedback>

          <!-- <div v-if="!$v.form.staffPassword.$dirty" class="invalid-feedback">
            <i class="fas fa-exclamation-circle"></i> Staff password is
            required.
          </div>
          <div
            v-if="
              $v.form.staffPassword.$dirty && !$v.form.staffPassword.minLength
            "
            class="invalid-feedback"
          >
            <i class="fas fa-exclamation-circle"></i> Password must be at least
            8 characters long.
          </div> -->
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <b-input-group>
            <b-input-group-prepend is-text>
              <i class="fa-solid fa-lock"></i>
            </b-input-group-prepend>
            <b-form-input
              id="confirmPassword"
              type="password"
              v-model.trim="form.confirmPassword"
              placeholder="Re-enter Staff Password"
              :state="
                !form.confirmPassword
                  ? null
                  : $v.form.confirmPassword.required &&
                    $v.form.confirmPassword.sameAsPassword
              "
            ></b-form-input>
          </b-input-group>

          <b-form-invalid-feedback
            v-if="
              !form.confirmPassword ? null : !$v.form.confirmPassword.required
            "
            :state="$v.form.confirmPassword.required"
          >
            Staff Password is required
          </b-form-invalid-feedback>

          <b-form-invalid-feedback
            v-if="
              !form.confirmPassword
                ? null
                : !$v.form.confirmPassword.sameAsPassword
            "
            :state="$v.form.confirmPassword.sameAsPassword"
          >
            Passwords do not match
          </b-form-invalid-feedback>

          <!-- <div v-if="!$v.form.confirmPassword.$dirty" class="invalid-feedback">
            <i class="fas fa-exclamation-circle"></i> Please confirm your
            password.
          </div>
          <div
            v-if="
              $v.form.confirmPassword.$dirty &&
              !$v.form.confirmPassword.sameAsPassword
            "
            class="invalid-feedback"
          >
            <i class="fas fa-exclamation-circle"></i> Passwords do not match.
          </div> -->
        </div>

        <div class="d-flex justify-content-end">
          <div class="ml-auto">
            <b-btn
              class="btn btn-success mr-1"
              variant="primary"
              @click="form.isStaffModal = false"
              >Back</b-btn
            >
            <b-btn class="btn btn-primary" variant="primary" type="submit"
              >Submit</b-btn
            >
          </div>
        </div>
      </form>
    </div>
  </b-modal>
</template>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "RegisterModal",
  data() {
    return {
      form: {
        clinicName: "",
        clinicAddress: "",
        staffName: "",
        staffEmail: "",
        staffPassword: "",
        confirmPassword: "",
        isStaffModal: false,
        logo: null,
        logoPreview: "",
        legitimacy: null,
      },
    };
  },
  validations: {
    form: {
      clinicName: { required },
      clinicAddress: { required },
      staffName: { required },
      staffEmail: { required, email },
      staffPassword: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAsPassword: sameAs("staffPassword") },
    },
  },
  methods: {
    onLogoChange(e) {
      if (e.target.files[0]) {
        const file = e.target.files[0];
        this.form.logo = file;
        this.form.logoPreview = URL.createObjectURL(file);
      } else {
        this.form.logo = null;
        this.form.logoPreview = "";
      }
    },
    onLegitmacyChange(e) {
      if (e.target.files[0]) {
        const file = e.target.files[0];
        this.form.legitimacy = file;
      } else {
        this.form.legitimacy = null;
      }
    },
    onSubmit() {
      if (this.$v.form.$invalid) {
        console.log("invalid");
        return;
      }

      axios
        .post("https://sore-gold-millipede-vest.cyclic.app/registerUser", {
          email: this.form.staffEmail,
          password: this.form.staffPassword,
          displayName: this.form.staffName,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // Hide the modal and reset the form.
      this.$bvModal.hide("register-modal");
      // this.resetForm();
    },
    resetForm() {
      this.form.isStaffModal = false;
      this.form.clinicName = "";
      this.form.clinicAddress = "";
      this.form.logo = null;
      this.form.logoPreview = "";
      this.form.legitimacy = null;
      this.form.staffName = "";
      this.form.staffEmail = "";
      this.form.staffPassword = "";
      this.form.confirmPassword = "";
      this.$v.$reset();
    },
  },
};
</script>
<style scoped>
.invalid-feedback {
  color: #dc3545;
  font-size: 80%;
  margin-top: 0.25rem;
}

.fa-exclamation-circle {
  margin-right: 0.25rem;
}
</style>