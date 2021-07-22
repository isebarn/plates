<template>
  <v-container>
    <v-stepper v-model="step" non-linear>
      <v-overlay
        :value="placing_order"
        absolute
      >
        <v-progress-circular
          indeterminate
          color="red"
        />
      </v-overlay>
      <v-stepper-header>
        <v-stepper-step step="1" editable>
          Plate type Select
        </v-stepper-step>
        <v-stepper-step step="2" editable>
          Carrier select
        </v-stepper-step>
        <v-stepper-step step="3" editable>
          Customer Address
        </v-stepper-step>
        <v-stepper-step step="4" editable>
          Municipality
        </v-stepper-step>
        <v-stepper-step step="5" editable>
          Add Plates
        </v-stepper-step>
        <v-stepper-step step="6" editable>
          Review
        </v-stepper-step>
      </v-stepper-header>
      <v-divider />
      <type />
      <carrier />
      <customer />
      <municipality />
      <deregister v-if="type ==='deregister'" />
      <plates v-else />
      <reviewDeregistration v-if="type ==='deregister'" />
      <review v-else />
    </v-stepper>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import type from '~/components/order/create/type.vue'
import carrier from '~/components/order/create/carrier.vue'
import customer from '~/components/order/create/customer.vue'
import municipality from '~/components/order/create/municipality.vue'
import plates from '~/components/order/create/plates.vue'
import deregister from '~/components/order/create/deregister.vue'
import review from '~/components/order/create/review.vue'
import reviewDeregistration from '~/components/order/create/reviewDeregistration.vue'

export default {
  components: {
    type,
    carrier,
    customer,
    municipality,
    plates,
    deregister,
    review,
    reviewDeregistration
  },

  computed: {
    ...mapFields('order', [
      'step',
      'placing_order',
      'data.type'
    ])
  }

}
</script>
