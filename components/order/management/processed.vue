<template>
  <v-card flat>
    <v-list-item v-for="(item, i) in processed" :key="i" two-line>
      <v-card v-if="type !== 'deregister'">
        <v-card-subtitle class="pb-0">
          Tracking No: {{ item.shipping.carrier_tracking_no }}
        </v-card-subtitle>
        <v-list-item v-for="(order, j) in item.orders" :key="j" two-line>
          <v-list-item-content>
            <v-list-item-title>{{ order.driver }}</v-list-item-title>
            <v-list-item-subtitle>{{ order.registration }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card v-else>
        <v-card-subtitle class="pb-0">
          Tracking No: {{ item.shipment.carrier_tracking_no }}
        </v-card-subtitle>
        <v-list-item two-line>
          <v-list-item-content>
            {{ item.receiver.company }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.receiver.street }} {{ item.receiver.street_no }}, {{ item.receiver.city }}</v-list-item-subtitle>
            <v-divider />
            <v-list-item-title>Plates</v-list-item-title>
            <v-container mx-2>
              <v-list-item-subtitle v-for="(registration, registration_idx) in item.registrations" :key="registration_idx">
                {{ registration }}
              </v-list-item-subtitle>
            </v-container>
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
      'order.processed',
      'order.type'
    ])
  }
}
</script>
