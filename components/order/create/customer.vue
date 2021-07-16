<template>
  <v-stepper-content step="3">
    <v-text-field
      v-model="first_name"
      label="First Name"
    />
    <v-text-field
      v-model="last_name"
      label="Last Name"
    />
    <v-text-field
      v-model="street"
      label="Street"
    />
    <v-text-field
      v-model="street_no"
      label="Street number"
    />
    <v-text-field
      v-model="zip_code"
      label="Zip Code"
    />
    <v-text-field
      v-model="city"
      label="City"
    />
    <v-text-field
      v-model="company"
      label="Company"
    />
    <v-text-field
      v-model="country"
      label="Country"
    />
    <v-btn block @click="step+=1">
      Done
    </v-btn>
  </v-stepper-content>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {

  computed: {
    ...mapFields('order', [
      'step',
      'data.customer.city',
      'data.customer.company',
      'data.customer.country',
      'data.customer.first_name',
      'data.customer.last_name',
      'data.customer.street',
      'data.customer.street_no',
      'data.customer.zip_code'
    ])
  }
}
</script>
