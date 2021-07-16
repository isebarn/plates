import Vue from 'vue'
import moment from 'moment'

function date (date) {
  return date !== '' ? moment(date).format('LLL') : ''
}

Vue.filter('date', date)
