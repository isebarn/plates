<template>
  <v-stepper-content step="4">
    <v-combobox
      v-model="municipality"
      :items="municipalities"
      label="Municipality"
      @change="step+=1"
    >
      <template #item="data">
        {{ data.item.company }}, {{ data.item.city }}
      </template>
      <template #selection="data">
        {{ data.item.company }}, {{ data.item.city }}
      </template>
    </v-combobox>
  </v-stepper-content>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {

  computed: {
    ...mapFields('order', [
      'step',
      'data.municipality',
      'municipalities'
    ])
  }
}
</script>
