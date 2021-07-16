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
          <template v-slot:item.plates="{item}">
            {{ item.plates.length + item.processed.length }}
          </template>
          <!-- eslint-disable-next-line -->
          <template v-slot:item.processed="{item}">
            {{ item.processed.length }}
          </template>
        </v-data-table>
      </v-col>
      <v-col v-if="order" cols="7">
        <v-card flat>
          <v-overlay
            :value="loading_ship"
            absolute
          >
            <v-progress-circular
              indeterminate
              color="red"
            />
          </v-overlay>
          <v-toolbar
            flat
          >
            <v-toolbar-title>{{ submitting_user }}</v-toolbar-title>
          </v-toolbar>
          <v-card-subtitle class="pb-0">
            {{ company }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ first_name }} {{ last_name }}</div>
            <div>{{ street }}  {{ street_no }}</div>
            <div>{{ zip_code }}, {{ city }} </div>
          </v-card-text>
          <v-divider />
          <v-tabs>
            <v-tab>
              Unsent
            </v-tab>
            <v-tab>
              Shipped
            </v-tab>
            <v-tab>
              History
            </v-tab>

            <v-tab-item>
              <plates />
            </v-tab-item>
            <v-tab-item>
              <processed />
            </v-tab-item>
            <v-tab-item>
              <history />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import processed from '~/components/order/management/processed.vue'
import plates from '~/components/order/management/plates.vue'
import history from '~/components/order/management/history.vue'
export default {

  components: {
    processed,
    plates,
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
          text: '# Plates',
          align: 'start',
          value: 'plates'
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

  methods: {
    ...mapActions('management', ['ship', 'fetchOrders'])
  },

  computed: {
    ...mapGetters('management', [
      'orders',
      'loading_ship'
    ]),

    ...mapFields('management', [
      'order',
      'order.customer.city',
      'order.customer.company',
      'order.customer.first_name',
      'order.customer.last_name',
      'order.customer.street',
      'order.customer.street_no',
      'order.customer.zip_code',
      'order.history[0].submitting_user'
    ])
  }

}
</script>
