export default {
  all (list) {
    return list
  },
  active (list) {
    return list.filter(item => !item.state)
  },
  completed (list) {
    return list.filter(item => item.state)
  }
}
