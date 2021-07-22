<template>
  <v-stepper-content step="1">
    <v-btn block @click="type ='deregister'; step+=1">
      deregister
    </v-btn>
    <v-btn block @click="type ='red'; step+=1">
      red
    </v-btn>
    <v-btn block @click="type ='yellow'; step+=1">
      yellow
    </v-btn>
  </v-stepper-content>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {

  computed: {
    ...mapFields('order', [
      'step',
      'data.type'
    ])
  }
}
</script>
