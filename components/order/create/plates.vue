<template>
  <v-stepper-content step="5">
    <v-container>
      <v-card>
        <v-row>
          <v-list v-if="orders.length > 0">
            <v-list-item v-for="(order, index) in orders" :key="index" two-line>
              <v-list-item-content>
                <v-list-item-title>{{ order.driver }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.registration }} </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
      </v-card>
    </v-container>
    <v-container>
      <v-text-field
        v-model="driver"
        label="Driver Passport"
      />
      <v-text-field
        v-model="registration"
        label="Registration ID"
      />
      <v-btn @click="add_plate">
        Add
      </v-btn>
      <v-btn @click="step=6">
        Review
      </v-btn>
    </v-container>
  </v-stepper-content>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  computed: {
    ...mapFields('order', [
      'step',
      'data.orders',
      'plate.driver',
      'plate.registration'
    ])
  },

  methods: {
    ...mapActions('order', ['add_plate'])
  }

}
</script>
