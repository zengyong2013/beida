<template>
  <div class="box">
    <div class="title">初始条件</div>
    <el-form :inline="true" label-width="50px" class="elfrom">
      <h4>位置姿态</h4>
      <el-row>
        <el-form-item label="X"><el-input v-model="pos.x" placeholder="请输入内容"><span slot="suffix">m</span></el-input></el-form-item>
        <el-form-item label="Y"><el-input v-model="pos.y" placeholder="请输入内容"><span slot="suffix">m</span></el-input></el-form-item>
        <el-form-item label="Z"><el-input v-model="pos.z" placeholder="请输入内容"><span slot="suffix">m</span></el-input></el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="ψ"><el-input v-model="pos.ψ" placeholder="请输入内容"><span slot="suffix">rad</span></el-input></el-form-item>
        <el-form-item label="θ"><el-input v-model="pos.θ" placeholder="请输入内容"><span slot="suffix">rad</span></el-input></el-form-item>
        <el-form-item label="φ"><el-input v-model="pos.φ" placeholder="请输入内容"><span slot="suffix">rad</span></el-input></el-form-item>
      </el-row>
      <h4>速度</h4>
      <el-row>
        <el-form-item label="dx"><el-input v-model="pos.dx" placeholder="请输入内容"><span slot="suffix">m/s</span></el-input></el-form-item>
        <el-form-item label="dy"><el-input v-model="pos.dy" placeholder="请输入内容"><span slot="suffix">m/s</span></el-input></el-form-item>
        <el-form-item label="dz"><el-input v-model="pos.dz" placeholder="请输入内容"><span slot="suffix">m/s</span></el-input></el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="dψ"><el-input v-model="pos.dψ" placeholder="请输入内容"><span slot="suffix">rad/s</span></el-input></el-form-item>
        <el-form-item label="dθ"><el-input v-model="pos.dθ" placeholder="请输入内容"><span slot="suffix">rad/s</span></el-input></el-form-item>
        <el-form-item label="dφ"><el-input v-model="pos.dφ" placeholder="请输入内容"><span slot="suffix">rad/s</span></el-input></el-form-item>
      </el-row>
      <el-button class="btnok" type="success">确定</el-button>
    </el-form>

  </div>
</template>
<script>
export default {
  name: 'Condition',
  data() {
    return {
      pos: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    .title{
      height: 50px;
      margin: 2px 0 0 1px;
      line-height: 50px;
      font-size: 18px;
      font-weight: bold;
      text-indent: 30px;
      background: url('../../assets/icon2.png') no-repeat 5px center #efefef;
      background-size: 25px 25px;
    }
    .elfrom{
      margin: 20px 0 0 30px;
      .el-form-item{
        margin-right: 80px;
      }
    }
  }
</style>