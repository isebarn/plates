<template>
  <v-container>
    <v-card
      flat
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAADBCAMAAADxRlW1AAAAeFBMVEX/zADUBRHRABL/0wD/1QD/0QDcPw/hVg3/zgD9xALymwf4tAbofQz7ugPgTg7fVA77vwPYIxDnegziWQ3pdgvxlwj1pQbrggr3rQbaMw/jXw39wQLfSg7uign/yQD0oQfmbQz3rwbXGRDlZgzuiQnbOQ/vkAnZLRBvMPArAAAEPElEQVR4nO3Z6XLiOhCAUZCspFnDvmchGeD93/B6Y4nVcmzfqnFq6js/EZbkNuqWRacDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtE1cRaJdXfI9pWMJjqh2/ve4zWxYYn312h+I9eZqX70rFr3sW+7odTxbSWDE2bLVMMika6rqzjeFONil/62FzTru+R1PO6I3mG6vzSiI23ZrMPO3x9nKyHhfOWRB6Ngn/+pJEgR3UvrduFZuPxd9+PdRGobpQxhEpv438vZo4XVs+i4wolnblu4/Ff+iawUhnvDTfcLR3L/T/KG6d7/pI0oa+koQxq0GQSZ1g3B9ogl79u90mCeFvX/hNqkDcRpSdFpNCtov+kfXBycDP4R5m5pt9hJoMINW60O0q/9TiOVFv/PpN12Tgr/2zXuaFL6U9fDa6npwfyqVRz8K6a1GL/6dHp0krL/2zSJJCloaMs9Rm0GI61wVz8VpX9K8YNdKUpBe4k2pn2lOlZEf0u5UWt42yo2NilzeEhWru5klUXDHeouplyYFJQ21nBQeRevxS8EqVPbTZydvtWKQ1U8tDZllq0nhkVspOxzRW8woabCHWkGYpUnBL6xds2s3KTxQirvZWb3FnJOGaFhrPaSbaq2wdi9tJ4U7ZWOfpyzrJYX02blNvaSQ1E+1sHYnvyYIWnHPUpYLJIVerRjE9TPuyz4r66H/e5KCUtzP+RZwWtw8pElBtnV+CuZP0pnzC2v+YvEraBv7a8qSzn7yTX4IMOnVkV4j+1DLX+C8fcAjm9Twi/+MJpHNFL6eJgtlb2HD244oTzCl8/h+QTxEuKlREM6np7DTQdSNfffzMFYcPpL1LT2/n3n+lml33nDbNP9FX2Xz+OYyEPe+VZu2x2ZhcMPSV4SB1DhfyA/FopOfRvJMb/36ac5pZnytPsrCyig031WzKMh+UGLktBOzoOypho6Q1PqZFVZ1pxAQby1kFJpw00QiYWmjnxSCRunrQ+gISa+f2aZIe30IeRNXMutmQShbEfGA1c8XzKWXJgXlCOmU13znn7ZmPx/xIxccZuOccqr9P1eEW4dHHIm2sQ/M7isrD9rx8f6H09aOq5wVzNqqL9/X5oZRCFdKG1e3qsvVTFdZkdJ2mas8KSgvZNelUjktjOOkUFbbm6aFwbKvWo7ih1ttuZrPs+R3GjpCCiyV679udlYtDJ9xDN71+WaTbvjWEe9bdfGA0fjHuSXZY7e6/bvoF5TbsbxTNtX3jG5XW6Md3RU6O4o7l1b2ppWyP37WjAciq8PDB8m5ym13ND6kxvPZeeDuf8nJx0uxn5f8TmXpjTNePfzbJNFoOfyaq3O5XXC20tOne591oyjE212dhJseFP5Jdmo/oXG+z1iccnVhtB/n9GtewwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCP+g+6mU9SjX2N3AAAAABJRU5ErkJggg=="
      />

      <v-card-subtitle class="pb-0">
        Order Id
      </v-card-subtitle>
      <v-card-subtitle class="text--primary">
        {{ _id }}
      </v-card-subtitle>
      <v-card-subtitle class="pb-0">
        Shipping Id:
      </v-card-subtitle>
      <v-card-subtitle class="text--primary">
        {{ id }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="orange"
          text
          :href="label_url"
        >
          Package Label
        </v-btn>
        <v-btn
          color="orange"
          text
          :href="tracking_url"
        >
          Tracking
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {

  computed: {
    ...mapFields('order', [
      'order._id',
      'order.shipment.id',
      'order.shipment.tracking_url',
      'order.shipment.carrier_tracking_no',
      'order.shipment.label_url'
    ])
  }
}
</script>
