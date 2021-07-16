<template>
  <v-card flat>
    <v-list shaped>
      <v-list-item-group
        v-model="selectedPlates"
        multiple
      >
        <template v-for="(item, i) in plates">
          <v-divider
            v-if="!item"
            :key="`divider-${i}`"
          />

          <v-list-item
            v-else
            :key="`item-${i}`"
            :value="item"
            active-class="deep-purple--text text--accent-4"
          >
            <template #default="{ active }">
              <v-list-item-content>
                <v-list-item-title>{{ item.driver }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.registration }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                />
              </v-list-item-action>
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

  methods: {
    ...mapActions('management', ['ship'])
  },

  computed: {
    ...mapFields('management', [
      'order.plates',
      'selectedPlates'
    ])
  }
}
</script>
