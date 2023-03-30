<template>
  <b-modal id="signin-modal" title="Sign In" hide-footer>
    <b-form @submit.prevent="signIn">
      <b-form-group id="email-group" label="Email" label-for="email-input">
        <b-input-group>
          <b-input-group-prepend is-text>
            <i class="fa-solid fa-envelope"></i>
          </b-input-group-prepend>
          <b-form-input
            id="email-input"
            v-model.trim="email"
            :state="!email? null :$v.email.required && $v.email.email"
            required
            placeholder="Enter Email"
          ></b-form-input>
        </b-input-group>

        <b-form-invalid-feedback
          v-if="!email? null :!$v.email.required"
          :state="$v.email.required"
        >
          Email is required
        </b-form-invalid-feedback>

        <b-form-invalid-feedback
          v-else-if="!email? null :!$v.email.email"
          :state="$v.email.email"
        >
          Email is invalid
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="password-group"
        label="Password"
        label-for="password-input"
      >
        <b-input-group>
          <b-input-group-prepend is-text>
            <i class="fa-solid fa-lock"></i>
          </b-input-group-prepend>
          <b-form-input
            id="password-input"
            v-model.trim="password"
            type="password"
            required
            :state="!password? null :$v.password.required"
            placeholder="Enter Password"
          ></b-form-input>
        </b-input-group>

        <b-form-invalid-feedback
          v-if="!password? null :!$v.password.required"
          :state="$v.password.required"
        >
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="w-100"
        :disabled="!isValid"
      >
        Sign In
      </b-button>
    </b-form>
  </b-modal>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
  validations: {
    email: { required, email },
    password: { required },
  },
  computed: {
    isValid() {
      return !this.$v.$invalid;
    },
  },
  methods: {
    signIn() {
      this.submitted = true;

      if (this.isValid) {
        // Submit the form
      }
    },
  },
};
</script>