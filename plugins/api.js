async function placeOrder (app, data) {
  const response = await app.$axios.post('order/place', data)
  return response
}

async function queryOrders (app) {
  const response = await app.$axios.$get('order')
  return response
}

async function shipOrder (app, payload) {
  const response = await app.$axios.$put('order/ship', payload)
  return response
}

export default ({ app }, inject) => {
  inject('placeOrder', data => placeOrder(app, data))
  inject('queryOrders', data => queryOrders(app))
  inject('shipOrder', data => shipOrder(app, data))
}
