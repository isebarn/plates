<template>
  <v-stepper-content step="6">
    <v-card>
      <v-card-title>{{ type }} plate order</v-card-title>
      <v-card-subtitle>{{ carrier }} - {{ service }}</v-card-subtitle>
      <v-card-text>
        Plates
        <v-list v-if="plates.length > 0">
          <v-list-item v-for="(plate, index) in plates" :key="index" two-line>
            <v-list-item-content>
              <v-list-item-title>{{ plate.driver }}</v-list-item-title>
              <v-list-item-subtitle>{{ plate.registration }} </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        Ships to
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>{{ first_name }} {{ last_name }}, {{ company }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ street_no }} {{ street }}, {{ zip_code }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ city }}, {{ country }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        Municipality
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>{{ municipality.company }}, {{ municipality.city }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ municipality.street_no }} {{ municipality.street }}, {{ municipality.zip_code }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
    <v-btn block @click="order">
      Place Order
    </v-btn>
  </v-stepper-content>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  computed: {
    ...mapFields('order', [
      'step',
      'data.type',
      'data.carrier',
      'data.service',
      'data.plates',
      'data.customer.city',
      'data.customer.company',
      'data.customer.country',
      'data.customer.first_name',
      'data.customer.last_name',
      'data.customer.street',
      'data.customer.street_no',
      'data.customer.zip_code',
      'data.municipality'
    ])
  },

  methods: {
    ...mapActions('order', ['order'])
  }
}
</script>
