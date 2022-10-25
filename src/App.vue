<template>
  <div>
    <MyRouter :routerList="routerList"></MyRouter>
    <MyHeader
      :statusList="statusList"
      @updateList="updateList"
      @searchByTitle="searchByTitle"
    ></MyHeader>
    <MyList :dataList="showList" @delFn="delFn"></MyList>
  </div>
</template>

<script>
import './assets/iconfont/iconfont.css'

import MyRouter from './components/MyRouter.vue'
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
export default {
  name: 'App',
  data() {
    return {
      routerList: [
        { id: 1, title: '总览', icon: 'iconfont icon-tuanduizonglan' },
        { id: 2, title: '资源管理', icon: 'iconfont icon-developer' },
        { id: 3, title: 'IT服务管理', icon: 'iconfont icon-shezhi' },
        { id: 4, title: '监控管理', icon: 'iconfont icon-APIjiankong' },
        { id: 5, title: '费用管理', icon: 'iconfont icon-feiyong' },
        { id: 6, title: '组织管理', icon: 'iconfont icon-fl-zuzhi' },
      ],
      statusList: ['全部', '未处理', '处理中', '已完成'],
      dataList: JSON.parse(localStorage.getItem('orderList')) || [
        {
          id: 100,
          title: 'JA0564128711',
          theme: '测试工单',
          type: '服务工单',
          status: 2,
          time: '2020-03-07 08:36:50',
          handlingPeron: '乔森',
          handlingTime: 30,
          appraise: '⭐⭐⭐⭐⭐',
          createPerson: 'hanlei',
        },
        {
          id: 101,
          title: 'JA0564128712',
          theme: '测试工单',
          type: '服务工单',
          status: 2,
          time: '2020-03-07 08:36:50',
          handlingPeron: '乔森',
          handlingTime: 30,
          appraise: '⭐⭐⭐⭐⭐',
          createPerson: 'hanlei',
        },
        {
          id: 102,
          title: 'JA0564128713',
          theme: '测试工单',
          type: '服务工单',
          status: 3,
          time: '2020-03-07 08:36:50',
          handlingPeron: '乔森',
          handlingTime: 30,
          appraise: '⭐⭐⭐⭐⭐',
          createPerson: 'hanlei',
        },
      ],
      status: 0,
    }
  },
  methods: {
    updateList(status) {
      this.status = status
    },
    delFn(id) {
      let index = this.dataList.findIndex((obj) => obj.id === id)
      this.dataList.splice(index, 1)
    },
    searchByTitle(title) {
      if (title.trim() === '') {
        return this.dataList
      }
      this.dataList = this.dataList.filter((obj) => obj.title === title)
    },
  },
  computed: {
    showList() {
      if (this.status === 0) {
        return this.dataList
      }
      return this.dataList.filter((obj) => obj.status === this.status)
    },
  },
  watch: {
    dataList: {
      deep: true,
      handler() {
        localStorage.setItem('orderList', JSON.stringify(this.dataList))
      },
    },
  },
  components: { MyRouter, MyHeader, MyList },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
}

/* 真正清除浮动的标签 */
.clearfix::after {
  /* content: '';
            display: table; */
  clear: both;
}
</style>
