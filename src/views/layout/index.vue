<template>
  <div class="box">
    <div class="top">
      <div class="logo">LOGO 火星大气对着陆巡视器稳定性分析系统</div>
      <div class="bar">
        <ul>
          <li><img src="../../assets/new.png" alt=""> 新建</li>
          <li><img src="../../assets/open.png" alt=""> 打开</li>
          <li><img src="../../assets/save.png" alt=""> 保存</li>
          <li><img src="../../assets/lsave.png" alt=""> 另存</li>
        </ul>
      </div>
      <div class="top_button">
        <div class="inbut"><img src="../../assets/pause.png" alt=""> 启动</div>
        <div class="inbut stop"><span>||</span> 停止</div>
      </div>
    </div>
    <!-- left -->
    <div class="left bar">
      <h3>前处理</h3>
      <el-tree
        :data="treeData"
        :props="defaultProps"
        @node-click="getTree"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span v-if="data.children"><i class="icon1"></i></span>         
          <span v-else><i class="icon2"></i></span> 
          <span>{{ node.label }}</span>        
        </span>
      </el-tree>
    </div>
    <!-- right -->
    <div class="right">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      treeData: [{
        label: '时间环境',
        children: [{
          label: '仿真时间',
        }, {
          label: '重力场'
        }]
      }, {
        label: '探测器',
        children: [{
          label: '本体',
          children: [{
            label: '惯量特性'
          }, {
            label: '初始条件', url: '/tan1'
          }, {
            label: '足垫是否对称', url: '/tan2'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    getTree(obj) {
      this.$router.push({ path: obj.url })
    }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    .top{
      height: 120px;
      overflow: hidden;
      border-bottom: 2px solid #E7E7E7;
      .logo{
        font-size: 20px;
        padding: 20px;
        font-weight: bold;
      }
      .bar{
        float: left;
        margin: 0 0 0 20px;
        ul{
          li{
            float: left;
            margin: 0 20px 0 0;
            cursor: pointer;
            img{
              vertical-align: middle;
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .top_button{
        float: left;
        margin: 0 0 0 50%;
        .inbut{
          float: left;
          width: 70px;
          height: 32px;
          margin: 0 20px 0 0;
          line-height: 32px;
          background:rgba(0,191,87,1);
          box-shadow:0px 4px 10px 0px rgba(37,191,107,0.1);
          border-radius:3px;
          font-size: 14px;
          color: #fff;
          cursor: pointer;
          img{
            width: 20px;
            height: 20px;
            margin: 0 0 0 5px;
            vertical-align: middle;
          }
        }
        .stop{
          background: #FF5400;
          span{
            font-size: 12px;
            margin: 0 5px 0 10px;
          }
        }
      }
    }
    .left{
      position: absolute;
      top: 120px;
      bottom: 0;
      width: 300px;
      padding: 20px;
      border-right: 2px solid #E7E7E7;
    }
    .right{
      position: absolute;
      left: 342px;
      top: 120px; right: 0;
      bottom: 0;
      box-sizing: border-box;
    }
  }
</style>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>