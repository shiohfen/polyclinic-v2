<template>
  <b-modal id="register-modal" title="Register" size="lg" hide-footer @hide="resetForm">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="clinicName">Clinic Name:</label>
        <input
          id="clinicName"
          class="form-control"
          type="text"
          v-model.trim="form.clinicName"
        />
        <div v-if="!$v.form.clinicName.$dirty" class="invalid-feedback">
          <i class="fas fa-exclamation-circle"></i> Clinic name is required.
        </div>
        <div
          v-if="$v.form.clinicName.$dirty && !$v.form.clinicName.required"
          class="invalid-feedback"
        >
          <i class="fas fa-exclamation-circle"></i> Clinic name is required.
        </div>
      </div>

      <div class="form-group">
        <label for="clinicAddress">Clinic Address:</label>
        <input
          id="clinicAddress"
          class="form-control"
          type="text"
          v-model.trim="form.clinicAddress"
        />
        <div v-if="!$v.form.clinicAddress.$dirty" class="invalid-feedback">
          <i class="fas fa-exclamation-circle"></i> Clinic address is required.
        </div>
        <div
          v-if="$v.form.clinicAddress.$dirty && !$v.form.clinicAddress.required"
          class="invalid-feedback"
        >
          <i class="fas fa-exclamation-circle"></i> Clinic address is required.
        </div>
      </div>

      <div class="form-group">
        <label for="staffName">Staff Name:</label>
        <input
          id="staffName"
          class="form-control"
          type="text"
          v-model.trim="form.staffName"
        />
        <div v-if="!$v.form.staffName.$dirty" class="invalid-feedback">
          <i class="fas fa-exclamation-circle"></i> Staff name is required.
        </div>
        <div
          v-if="$v.form.staffName.$dirty && !$v.form.staffName.required"
          class="invalid-feedback"
        >
          <i class="fas fa-exclamation-circle"></i> Staff name is required.
        </div>
      </div>

      <div class="form-group">
        <label for="staffEmail">Staff Email:</label>
        <input
          id="staffEmail"
          class="form-control"
          type="email"
          v-model.trim="form.staffEmail"
        />
        <div v-if="!$v.form.staffEmail.$dirty" class="invalid-feedback">
          <i class="fas fa-exclamation-circle"></i> Staff email is required.
        </div>
        <div
          v-if="$v.form.staffEmail.$dirty && !$v.form.staffEmail.email"
          class="invalid-feedback"
        >
          <i class="fas fa-exclamation-circle"></i> Invalid email address.
        </div>
      </div>

      <div class="form-group">
        <label for="staffPassword">Staff Password:</label>
        <input
          id="staffPassword"
          class="form-control"
          type="password"
          v-model.trim="form.staffPassword"
        />
        <div v-if="!$v.form.staffPassword.$dirty" class="invalid-feedback">
          <i class="fas fa-exclamation-circle"></i> Staff password is required.
        </div>
        <div
          v-if="
            $v.form.staffPassword.$dirty && !$v.form.staffPassword.minLength
          "
          class="invalid-feedback"
        >
          <i class="fas fa-exclamation-circle"></i> Password must be at least 8
          characters long.
        </div>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input
          id="confirmPassword"
          class="form-control"
          type="password"
          v-model.trim="form.confirmPassword"
        />
        <div v-if="!$v.form.confirmPassword.$dirty" class="invalid-feedback">
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
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <b-btn class="btn btn-primary" variant="primary" type="submit" block>Submit</b-btn>
      </div>
    </form>
  </b-modal>
</template>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

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
    onSubmit() {
      this.$v.form.$touch();

      if (this.$v.form.$invalid) {
        return;
      }

      // TODO: Submit the form data to the server.
      console.log(this.form);

      // Hide the modal and reset the form.
      this.$bvModal.hide("register-modal");
      this.resetForm();
    },
    resetForm() {
      this.form.clinicName = "";
      this.form.clinicAddress = "";
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