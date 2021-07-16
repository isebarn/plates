<template>
  <v-stepper-content step="5">
    <v-container>
      <v-card>
        <v-row>
          <v-list v-if="orders.length > 0">
            <v-list-item v-for="(plate, index) in orders" :key="index" three-line>
              <v-list-item-content>
                <v-list-item-title>{{ plate.receiver.company }}, {{ plate.receiver.city }}</v-list-item-title>
                <v-list-item-subtitle>{{ plate.receiver.street }} {{ plate.receiver.street_no }}, {{ plate.receiver.zip_code }}  </v-list-item-subtitle>
                <v-list-item v-for="(registration, j) in plate.registrations" :key="j">
                  <v-list-item-subtitle>{{ registration }}</v-list-item-subtitle>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
      </v-card>
    </v-container>
    <v-container>
      <v-layout>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="registration"
              label="Registration ID"
            />
            <v-btn @click="add_deregistration">
              Add
            </v-btn>
            <v-btn @click="step+=1">
              Review
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-combobox
                v-model="receiver"
                :items="receivers"
                label="Receiver"
                @change="clear_new_recipent"
              >
                <template #item="data">
                  {{ data.item.company }}, {{ data.item.city }}
                </template>
                <template #selection="data">
                  {{ data.item.company }}, {{ data.item.city }}
                </template>
              </v-combobox>
            </v-row>
            <v-row>
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
            </v-row>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </v-stepper-content>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  methods: {
    ...mapActions('order', ['add_deregistration', 'clear_new_recipent'])
  },

  computed: {
    ...mapFields('order', [
      'step',
      'data.orders',
      'plate.registration',
      'data.customer',
      'receiver',
      'new_receiver.first_name',
      'new_receiver.last_name',
      'new_receiver.street',
      'new_receiver.street_no',
      'new_receiver.zip_code',
      'new_receiver.city',
      'new_receiver.company',
      'new_receiver.country'
    ]),

    receivers () {
      return [...new Set([this.customer, ...this.orders.map(x => x.receiver)].map(x => JSON.stringify(x)))].map(x => JSON.parse(x))
    }
  }
}
</script>
