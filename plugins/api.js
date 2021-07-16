async function placeOrder (app, data) {
  const response = await app.$api.orders.place(data)
  return response
}

async function queryOrders (app) {
  const response = await app.$api.orders.get()
  return response
}

async function shipOrder (app, payload) {
  const response = await app.$api.orders.ship(payload)
  return response
}

export default ({ app }, inject) => {
  inject('placeOrder', data => placeOrder(app, data))
  inject('queryOrders', data => queryOrders(app))
  inject('shipOrder', data => shipOrder(app, data))
}
