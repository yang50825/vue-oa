<template>
  <div class="left_box">
    <ul>
      <li class="router_link" v-for="obj in routerList" :key="obj.id">
        <a href="#">
          <em :class="obj.icon"></em>
          <span>{{ obj.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyRouter',
  data() {
    return {}
  },
  props: ['routerList'],
}
</script>

<style scoped>
.left_box {
  float: left;
  width: 165px;
  height: 100%;
  background-color: #edf1f5;
}

.router_link {
  height: 55px;
  font-size: 14px;
}

.router_link:first-child a {
  color: #06a787;
}

.router_link:first-child span {
  padding-left: 15px;
}

.router_link a {
  color: #020055;
}

.router_link em {
  display: inline-block;
  padding: 10px;
  width: 40px;
  height: 40px;
  color: #06a787;
}
</style>
