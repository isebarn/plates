<template>
  <v-card flat>
    <v-list shaped>
      <v-list-item-group
        v-model="selected"
        multiple
      >
        <template v-for="(order, i) in orders">
          <v-divider
            v-if="!order"
            :key="`divider-${i}`"
          />

          <v-list-item
            v-else
            :key="`order-${i}`"
            :value="order"
            active-class="deep-purple--text text--accent-4"
          >
            <template #default="{ active }">
              <v-list-item-content v-if="type === 'deregister'">
                <v-list-item-content>
                  {{ order.receiver.company }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.receiver.street }} {{ order.receiver.street_no }}, {{ order.receiver.city }}</v-list-item-subtitle>
                  <v-divider />
                  <v-list-item-title>Plates</v-list-item-title>
                  <v-container mx-2>
                    <v-list-item-subtitle v-for="(registration, registration_idx) in order.registrations" :key="registration_idx">
                      {{ registration }}
                    </v-list-item-subtitle>
                  </v-container>
                </v-list-item-content>
              </v-list-item-content>
              <v-list-item-content v-else>
                <v-list-item-title>{{ order.driver }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.registration }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                />
              </v-list-item-action>
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <v-btn block color="primary" @click="ship">
      Send
    </v-btn>
  </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'

export default {
  computed: {
    ...mapFields('management', [
      'order.orders',
      'order.type',
      'selected'
    ])
  },

  methods: {
    ...mapActions('management', ['ship'])
  }

}
</script>
