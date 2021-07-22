import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  placing_order: false,
  carriers: ['dhl', 'ups'],
  services: ['standard'],
  plate: {},
  orders: [],
  order: null,
  receiver: null,
  type: null,
  new_receiver: {
    city: 'Paddy',
    company: 'Halle',
    country: 'DE',
    first_name: 'Knul',
    last_name: 'Hast',
    street: 'Musterstraße',
    street_no: '100',
    zip_code: '33089'
  },
  municipalities: [
    {
      company: 'Mittelweg Municipality',
      first_name: 'Hans',
      last_name: 'Meier',
      street: 'Mittelweg',
      street_no: '158a',
      city: 'Hamburg',
      zip_code: '20148',
      country: 'DE'
    }
  ],
  step: 1,
  /*  data: {
    carrier: null,
    service: null,
    type: null,
    customer: {},    - upon finish order -> see some stuff

        -- reference
        -- tracking-link
        -- shipping-label link
    plates: []
  } */
  data: {
    carrier: 'dhl',
    customer: {
      city: 'Paderborn',
      company: 'Gewuerze Paderborn',
      country: 'DE',
      first_name: 'Karl',
      last_name: 'Müller',
      street: 'Musterstraße',
      street_no: '14a',
      zip_code: '33089'
    },
    municipality: {
      city: 'Hamburg',
      company: 'municipality',
      country: 'DE',
      first_name: 'Hans',
      last_name: 'Meier',
      street: 'Mittelweg',
      street_no: '158a',
      zip_code: '20148'
    },
    orders: [],
    service: 'standard',
    submitting_user: 'test_user',
    type: null
  }
})

export const mutations = {
  updateField,

  add_plate: (state) => {
    state.data.orders.push(state.plate)
    state.plate = {
      driver: '',
      registration: ''
    }
  },

  add_deregistration: (state) => {
    if (state.new_receiver.city !== '') {
      state.data.orders.push({
        receiver: state.new_receiver,
        registrations: [state.plate.registration]
      })
    } else {
      const orderReceiver = state.data.orders.find(
        x => JSON.stringify(x.receiver) === JSON.stringify(state.receiver))
      if (orderReceiver) {
        orderReceiver.registrations.push(state.plate.registration)
      } else {
        state.data.orders.push({
          receiver: state.receiver,
          registrations: [state.plate.registration]
        })
      }
    }

    state.plate = {
      registration: ''
    }

    state.receiver = null
    state.new_receiver = {}
  },

  orders: (state, payload) => {
    state.orders = payload
  },

  clear_new_recipent: (state) => {
    state.new_receiver = {
      city: '',
      company: '',
      country: '',
      first_name: '',
      last_name: '',
      street: '',
      street_no: '',
      zip_code: ''
    }
  },

  placing_order: (state, payload) => {
    state.placing_order = payload
  },

  completed_order: (state, payload) => {
    state.placing_order = false
    state.data = payload
    state.order = payload
  }
}

export const getters = {
  getField,

  carriers: (state) => { return state.carriers },
  services: (state) => { return state.services },
  carrier: (state) => { return state.carrier },
  data: (state) => { return state.data },
  municipalities: (state) => { return state.municipalities },
  orders: (state) => { return state.orders },
  loading_ship: (state) => { return state.loading_ship },
  placing_order: (state) => { return state.placing_order }
}

export const actions = {
  add_plate ({ commit }) {
    commit('add_plate')
  },

  clear_new_recipent ({ commit }) {
    commit('clear_new_recipent')
  },

  add_deregistration ({ commit }) {
    commit('add_deregistration')
  },

  order ({ commit, state }) {
    commit('placing_order', true)
    this.$placeOrder(state.data).then((response) => {
      commit('placing_order', false)
      commit('completed_order', response.data.data)
    })
  },

  async fetchOrders ({ commit }) {
    const response = await this.$queryOrders(state.data)
    commit('orders', response.data.orders)
  }
}
