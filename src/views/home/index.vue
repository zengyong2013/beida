<template>
  <div class="section">
    <div class="left_s">
      <div class="htit">
        <h3>计算仿真</h3>
        <el-select v-model="type">
          <el-option :value="1" label="模块选择" />
          <el-option :value="2" label="模块选择" />
          <el-option :value="3" label="模块选择" />
          <el-option :value="4" label="模块选择" />
        </el-select>
      </div>
      <div class="box1">
        <dl>
          <dt>时间：</dt>
          <dd>t=0s</dd>
        </dl>
        <dl>
          <dt>本地位置：</dt>
          <dd>x=xx</dd>
          <dd>Y=xx</dd>
          <dd>Z=xx</dd>
        </dl>
        <dl>
          <dt>本体姿态：</dt>
          <dd>ψ=xx；</dd>
          <dd>θ=xx；</dd>
          <dd>φ=xx；</dd>
        </dl>
      </div>
    </div>
    <!-- right -->
    <div class="right_s bar">
      <h3>后处理</h3>
      <el-tree
        :data="treeData"
        :props="defaultProps"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span v-if="data.children"><i class="icon1"></i></span>         
          <span v-else><i class="icon2"></i></span> 
          <span>{{ node.label }}</span>        
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      type: 1,
      treeData: [{
        label: '时间环境',
        children: [{
          label: '仿真时间',
        }, {
          label: '重力场'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .section{
    padding: 20px 15px;
    .htit{
      h3{
        font-size: 18px;
        display: inline;
        margin-right: 20px;
      }
    }
    .box1{
      margin-top: 20px;
      dl{
        dt{
          display: inline-block;
          width: 80px;
          color: #3e3e3e;
        }
        dd{
          display: inline-block;
          width: 50px;
        }
      }
    }
    .right_s{
      width: 400px;
      position: absolute;
      padding: 20px;
      top: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      border-left: 2px solid #E7E7E7;
    }
  }
</style>