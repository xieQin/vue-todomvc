<template>
  <ul class="list">
    <li v-for="item in listdata" track-by="$index" :class="{'complete': item.state}">
      <input type="checkbox" v-model="item.state">
      {{ $index + 1 }}  {{ item.value }}
      <i class="delete" @click="deleteTodo($index)">x</i>
    </li>
  </ul>
  <ul class="func">
    <li><a @click="all">all</a></li>
    <li><a @click="active">active</a></li>
    <li><a @click="completed">completed</a></li>
    <li><a @click="clear">clear</a></li>
  </ul>
  <p>{{ leftitem }} items left</p>
</template>

<script>
import filter from './filter'
export default {
  data () {
    return {
      check: 'all'
    }
  },
  props: ['list'],
  computed: {
    listdata () {
      return filter[this.check](this.list)
    },
    leftitem () {
      return filter['active'](this.list).length
    }
  },
  methods: {
    deleteTodo (index) {
      this.list.splice(index, 1)
    },
    all () {
      this.check = 'all'
    },
    active () {
      this.check = 'active'
    },
    completed () {
      this.check = 'completed'
    },
    clear () {
      this.list = filter.active(this.list)
    }
  }
}
</script>

<style lang="less">
  .list, .func {
    width: 500px;
    margin: 0 auto;

    li {
      position: relative;
      list-style: none;
      margin-top: 5px;
      line-height: 25px;
      height: 25px;
        a {
          display: block;
          text-align: center;
        }
    }

    li.complete {
      background-color: blue;
      color: #fff;
    }
  }
  .list li:hover i.delete{
    display: block;
  }
  .delete {
    display: none;
    position: absolute;
    right: 0;
    // display: inline-block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    background-color: red;
    color: #fff;
    text-align: center;
    font-style: normal;
  }
  .func {
    padding-top: 30px;
    overflow: hidden;
  }
  .func li {
    float: left;
    width: 100px;
    margin-right: 10px;
    text-align: center;
    background-color: orange;
    color: #fff;
    cursor: pointer;
  }
  p {
    position: relative;
    top: 10px;
    width: 400px;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    height: 30px;
    background-color: orange;
    color: #fff;
  }
</style>
