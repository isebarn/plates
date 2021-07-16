<template>
  <v-stepper-content step="2">
    <v-layout>
      <v-col cols="6">
        <v-row v-for="item in carriers" :key="item">
          <v-btn :outlined="carrier == item" @click="carrier=item">
            {{ item }}
          </v-btn>
        </v-row>
      </v-col>
      <v-col v-if="carrier != null" cols="6">
        <v-row v-for="item in services" :key="item">
          <v-btn :outlined="service == item" @click="service=item; step+=1">
            {{ item }}
          </v-btn>
        </v-row>
      </v-col>
    </v-layout>
  </v-stepper-content>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {

  computed: {
    ...mapFields('order', [
      'step',
      'data.carrier',
      'data.service',
      'carriers',
      'services'
    ])
  }
}
</script>
