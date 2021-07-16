<template>
  <v-card flat>
    <v-list-item v-for="(item, i) in processed" :key="i" two-line>
      <v-card>
        <v-card-subtitle class="pb-0">
          Tracking No: {{ item.shipping.carrier_tracking_no }}
        </v-card-subtitle>
        <v-list-item v-for="(plate, j) in item.plates" :key="j" two-line>
          <v-list-item-content>
            <v-list-item-title>{{ plate.driver }}</v-list-item-title>
            <v-list-item-subtitle>{{ plate.registration }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('management', [
      'order.processed'
    ])
  }
}
</script>
