<template>
  <div class="list-box">
    <div class="data-table">
      <table>
        <thead>
          <tr>
            <td>主题</td>
            <td>工单编号</td>
            <td>工单类型</td>
            <td>状态</td>
            <td>提交时间</td>
            <td>处理人员</td>
            <td>预计完成时间</td>
            <td>服务评价</td>
            <td>提交人</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in dataList" :key="obj.id">
            <td>{{ obj.theme }}</td>
            <td>{{ obj.title }}</td>
            <td>{{ obj.type }}</td>
            <td class="isCompleted">
              <!-- :class="{ isCompleted: obj.status === 3 }" -->
              {{ statusName(obj.status) }}
            </td>
            <td>{{ obj.time }}</td>
            <td>{{ obj.handlingPeron }}</td>
            <td>{{ obj.handlingTime }}分钟内</td>
            <td>{{ obj.appraise }}</td>
            <td>{{ obj.createPerson }}</td>
            <td>
              <span>催单 </span>
              <span> 撤销 </span>
              <span @click="delFn(obj.id)"> 删除</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  methods: {
    statusName(status) {
      if (status === 1) {
        return '未处理'
      } else if (status === 2) {
        return '处理中'
      } else if (status === 3) {
        return '已完成'
      }
    },
    delFn(id) {
      this.$emit('delFn', id)
    },
  },
  computed: {},
  props: ['dataList'],
}
</script>

<style scoped>
.list-box {
  float: left;
  margin-left: 10px;
  width: 87%;
}

.data-table table {
  border: 0;
}

.data-table thead tr:first-child {
  background-color: #d7d8da;
}

.data-table tr {
  width: 100%;
  height: 35px;
}

.data-table td {
  width: 150px;
  text-align: center;
  color: #4b556a;
}

.data-table tbody td:first-child {
  color: #02a7f0;
}

.data-table tbody td:last-child {
  color: #06a787;
  cursor: pointer;
}

.data-table tbody td:nth-child(7) {
  color: #98d87d;
}

.data-table tbody tr {
  border-bottom: 1px solid #d7d7d7;
}

.data-table tbody tr:hover {
  background-color: #d7d8da;
}

.isCompleted {
  color: #06a787;
}
</style>
