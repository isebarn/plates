<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col cols="order ? 5 : 12">
        <v-data-table
          :items="orders"
          :headers="headers"
          class="elevation-1"
          @click:row="order=$event"
        >
          <!-- eslint-disable-next-line -->
          <template v-slot:item.municipality="{item}">
            {{ item.municipality.company }} - {{ item.municipality.city }}
          </template>
          <!-- eslint-disable-next-line -->
          <template v-slot:item.customer="{item}">
            {{ item.customer.first_name }} {{ item.customer.last_name }} - {{ item.customer.company }}
          </template>
          <!-- eslint-disable-next-line -->
          <template v-slot:item.orders="{item}">
            {{ item.orders.length + item.processed.length }}
          </template>
          <!-- eslint-disable-next-line -->
          <template v-slot:item.processed="{item}">
            {{ item.processed.length }}
          </template>
        </v-data-table>
      </v-col>
      <v-col v-if="order" cols="7">
        <v-tabs>
          <v-tab>
            History
          </v-tab>
          <v-tab>
            Shipment
          </v-tab>
          <v-tab-item>
            <history />
          </v-tab-item>
          <v-tab-item>
            <shipment />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import shipment from '~/components/order/shipment.vue'
import history from '~/components/order/history.vue'
export default {
  components: {
    shipment,
    history
  },

  data () {
    return {
      headers: [
        {
          text: 'Municipality',
          align: 'start',
          value: 'municipality'
        },
        {
          text: 'Customer',
          align: 'start',
          value: 'customer'
        },
        {
          text: '# Orders',
          align: 'start',
          value: 'orders'
        },
        {
          text: '# Processed',
          align: 'start',
          value: 'processed'
        }
      ]
    }
  },

  async fetch () {
    await this.fetchOrders()
  },

  computed: {
    ...mapFields('order', [
      'orders',
      'order'
    ])
  },

  methods: {
    ...mapActions('order', ['fetchOrders'])
  }

}
</script>
