export default {
  all: list => list,
  active: list => list.filter(item => !item.state),
  completed: list => list.filter(item => item.state)
}
