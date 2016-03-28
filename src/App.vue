<template>
  <h1>todos</h1>
  <div class="input">
    <input type="checkbox" v-model="complete" @click="completeTodo">
    <input class="text" type="text" placeholder="what's need to be done" v-model="todo" @keyup.enter="add">
  </div>
  <todolist :list="list"></todolist>
</template>

<script>
import todolist from './components/List'

export default {
  data () {
    return {
      list: [],
      todo: '',
      complete: false
    }
  },
  components: {
    todolist
  },
  methods: {
    add () {
      let value = this.todo && this.todo.trim()
      if (!value) {
        return
      }
      let item = {value: value, state: false}
      this.list.push(item)
      this.todo = ''
    },
    completeTodo () {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i]['state'] = !this.complete
      }
      this.complete = false
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

body {
  width: 100%;
  height: auto;
}
a {
  text-decoration: none;
}
h1 {
  text-align: center;
  padding-top: 10px;
}
.input {
  padding-top: 20px;
  width: 500px;
  margin: 0 auto;

  .text {
    line-height: 25px;
    height: 25px;
    width: 400px;
  }
}
input[type=checkbox] {
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
}
</style>
