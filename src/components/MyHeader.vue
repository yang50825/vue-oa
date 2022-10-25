<template>
  <div class="header-box">
    <div class="top-box">IT服务管理 > 工单管理</div>
    <div class="header-content">
      <div class="left">
        <div class="btn">+创建工单</div>
      </div>
      <div class="right">
        <div class="date_search">
          <span>2019-10-01</span>
          ~
          <span>2019-12-06</span>
          <em class="iconfont icon-rili"></em>
        </div>
        <div class="id_search">
          <input
            type="text"
            placeholder="请输入工单编号"
            v-model="title"
            @keyup.enter="searchByTitle"
          />
          <em class="iconfont icon-sousuo" @click="searchByTitle"></em>
        </div>
      </div>
    </div>
    <div class="header-link">
      <ul @click="updateList">
        <li
          v-for="(obj, index) in statusList"
          :key="index"
          @click="updateStatus(index)"
          :class="{ selected: status === index }"
        >
          <a href="#">{{ obj }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      status: 0,
      title: '',
    }
  },
  methods: {
    updateStatus(index) {
      this.status = index
    },
    updateList() {
      this.$emit('updateList', this.status)
    },
    searchByTitle() {
      this.$emit('searchByTitle', this.title)
    },
  },
  props: ['statusList'],
}
</script>

<style scoped>
.header-box {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
}

.top-box {
  margin-left: 175px;
  line-height: 50px;
  caret-color: #4b556a;
  font-size: 14px;
}

.header-content {
  padding-top: 30px;
  padding-bottom: 15px;
  width: 100%;
  height: 80px;
}

.header-content .left {
  float: left;
  width: 90px;
  height: 30px;
}

.header-content .btn {
  margin-left: 30px;
  padding: 0 10px;
  width: 90px;
  height: 30px;
  border: 1px solid #06a787;
  border-radius: 5px;
  background-color: #06a787;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.header-content .right {
  float: right;
  width: 500px;
}

.date_search {
  float: left;
  margin-right: 8px;
  padding-left: 10px;
  width: 237px;
  height: 35px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  line-height: 35px;
  font-size: 14px;
  color: #999999;
}

.date_search em {
  float: right;
  margin-right: 5px;
  cursor: pointer;
}

.id_search {
  float: left;
  width: 230px;
  height: 35px;
  border: 1px solid #e4e4e4;
  color: #999999;
  border-radius: 5px;
}

.id_search input {
  padding-left: 5px;
  height: 100%;
  border: 0;
  outline: none;
}

.id_search input::placeholder {
  color: #999;
}

.id_search em {
  float: right;
  padding-right: 10px;
  line-height: 35px;
  cursor: pointer;
}

.header-link {
  float: left;
  margin-left: 10px;
  width: 87%;
  border-bottom: 1px solid #d7d7d7;
}

.header-link li {
  float: left;
  width: 70px;
  box-sizing: border-box;
  text-align: center;
}

.header-link li a {
  display: inline-block;
  padding: 15px 0;
  width: 100%;
  box-sizing: border-box;
  color: #4b556a;
}

.selected {
  border-bottom: 2px solid #06a787;
}
</style>
