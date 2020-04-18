<template>
  <div class="box">
    <div class="title">足垫是否对称</div>
    <div class="htit">
      <h3>足垫是否对称</h3>
      <el-select v-model="type">
        <el-option :value="1" label="模块选择" />
        <el-option :value="2" label="模块选择" />
        <el-option :value="3" label="模块选择" />
        <el-option :value="4" label="模块选择" />
      </el-select>
    </div>
    <div class="info">
      <p>备注：</p>
      <p>·是：足垫位置对称且相对本体速度为零，可根据第一足垫位置自动算出其他足垫位置<br>·否：其他情况，需要输入每个足垫姿态
      </p>
    </div>
    <el-form :inline="true" label-width="50px" class="elfrom">
      <h4>足垫一在本体位置</h4>
      <el-row>
        <el-form-item label="X"><el-input v-model="pos.x" placeholder="请输入内容"><span slot="suffix">m</span></el-input></el-form-item>
        <el-form-item label="Y"><el-input v-model="pos.y" placeholder="请输入内容"><span slot="suffix">m</span></el-input></el-form-item>
        <el-form-item label="Z"><el-input v-model="pos.z" placeholder="请输入内容"><span slot="suffix">m</span></el-input></el-form-item>
      </el-row>
      <el-button class="btnok" type="success">确定</el-button>
    </el-form>

  </div>
</template>
<script>
export default {
  name: 'Foot',
  data() {
    return {
      type: '',
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
    .htit{
      margin: 20px;
      h3{
        font-size: 16px;
        display: inline;
        margin-right: 20px;
      }
    }
    .info{
      margin: 20px;
      font-size: 14px;
      color: #333;
      padding: 10px 20px;
      background: #f8f9fb;
      p{
        line-height: 26px;
        &:first-child{
          font-size: 16px;
          color: #000;
          margin-bottom: 10px;
        }
      }
    }
    .elfrom{
      margin: 20px 0 0 30px;
      .el-form-item{
        margin-right: 80px;
      }
    }
    .btnok{
      margin: 30px 0 0 460px;
    }
  }
</style>