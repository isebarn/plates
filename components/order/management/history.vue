<template>
  <v-card flat>
    <v-card-text>
      <div class="font-weight-bold ml-8 mb-2">
        History
      </div>

      <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          v-for="entry in history"
          :key="entry.time"
          small
        >
          <div v-if="entry.submitting_user">
            <div class="font-weight-normal">
              <strong>Created</strong> @{{ entry.time | date }}
            </div>
            <div>
              {{ entry.submitting_user }}
            </div>
          </div>
          <div v-if="entry.update">
            <div class="font-weight-normal">
              <strong>Update information</strong> @{{ entry.time | date }}
            </div>
            <div v-for="(item, i) in entry.update" :key="i">
              {{ i }} - {{ item }}
            </div>
          </div>
          <div v-if="entry.ship">
            <div class="font-weight-normal">
              <strong>Ship</strong> @{{ entry.time | date }}
            </div>
            <div v-for="(item, i) in entry.ship.registrations" :key="i">
              {{ item }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {

  computed: {
    ...mapFields('management', [
      'order.history'
    ])
  }
}
</script>
