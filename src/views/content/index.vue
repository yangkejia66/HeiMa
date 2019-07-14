<template>
  <el-card  >
    <div class="header">
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right" >
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/content'}">内容管理</el-breadcrumb-item>
      </el-breadcrumb> -->
      <my-header>内容管理</my-header>
    </div>

    <el-form :model="ContForm" size="small" label-width="80px" class="headerForm">
      <el-form-item label="状态：">
        <el-radio-group v-model="ContForm.state">
          <el-radio :label="null">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道：">
        <el-select v-model="ContForm.channel_id">
          <el-option
            v-for="item in ChannelOption"
            :key="item.id "
            :value="item.id"
            :label="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间：">
        <div class="block">
          <el-date-picker
            v-model="dateValues"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">筛选</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      ContForm: {
        state: null,
        channel_id: null,
        begin_pubdate: null,
        end_pubdate: null
      },
      ChannelOption: [{ name: 'java', id: 1 }],
      dateValues: []
    }
  }
}
</script>

<style scope lang="less">
.header{
  margin-bottom: 20px;

}

</style>
