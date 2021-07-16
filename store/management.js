import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  selectedPlates: [],
  loading_ship: false,
  order: null,
  orders: []
})

export const mutations = {
  updateField,

  orders: (state, payload) => {
    state.orders = payload
  },

  update: (state, payload) => {
    Object.assign(state.order, payload)
    state.loading_ship = false
  },

  loading_ship: (state) => {
    state.loading_ship = true
  }
}

export const getters = {
  getField,
  orders: (state) => { return state.orders },
  loading_ship: (state) => { return state.loading_ship }
}

export const actions = {
  ship ({ commit, state }) {
    commit('loading_ship')
    this.$shipOrder({
      _id: state.order._id,
      registrations: state.selectedPlates.map(x => x.registration)
    }).then((response) => {
      commit('update', response.data.data)
    })
  },

  order ({ commit, state }) {
    commit('placing_order', true)
    this.$placeOrder(state.data).then((response) => {
      commit('placing_order', false)
    })
  },

  async fetchOrders ({ commit }) {
    console.log(123)
    const response = await this.$queryOrders(state.data)
    commit('orders', response.data.data.orders)
  }
}
