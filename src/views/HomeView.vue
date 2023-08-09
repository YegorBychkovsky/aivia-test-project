<template>
  <v-app>
    <v-main>
      <v-container class="d-flex align-center justify-center" fluid>
        <v-card class="max-width">
          <v-card-title>Login Form</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="emailVal"
                label="Email"
                :error-messages="emailErrors"
              />
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                :error-messages="passwordErrors"
              />
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { email, minLength, required } from "@vuelidate/validators";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const emailVal = ref("");
const password = ref("");

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, {
  email: emailVal.value,
  password: password.value,
});

let emailErrors = ref("");

let passwordErrors = ref("");
const login = () => {
  const v$ = useVuelidate(rules, {
    email: emailVal.value,
    password: password.value,
  });
  v$.value.$validate();
  if (!v$.value.$error) {
    console.log("Success");
    router.push("/game");
  } else {
    console.log("Fail");
    console.log();
    emailErrors.value = v$.value.email.email.$message;
    passwordErrors.value = `${v$.value.password.required.$message} and more than 6`;
  }
};
</script>

<style>
.max-width {
  max-width: 400px;
  margin: auto;
}
</style>
