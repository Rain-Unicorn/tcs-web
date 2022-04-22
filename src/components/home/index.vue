<template>
  <div id="index">
    <h2>更新计划</h2>
    <div class="eltimeline">
      <el-timeline>
        <el-timeline-item
          :timestamp="item.time"
          placement="top"
          v-for="(item, index) in data"
          :key="index"
        >
          <el-card>
            <h4>{{ item.time }}</h4>
            <p>{{ item.desc }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script lang="ts">
// import http from "@/plugin/request";
export default {
  data() {
    return {
      data: [
        {
          time: "2022-04-21",
          desc: "用户登录界面及UI优化",
        },
        {
          time: "2022-04-21 至-",
          desc: "用户登录/注册系统及旧版用户数据迁移",
        },
        {
          time: "2022-04-21 至-",
          desc: "旧版发帖系统数据迁移",
        },
        {
          time: "2022-04-25",
          desc: "发帖图片/视频上传功能",
        },
        {
          time: "2022-04-30",
          desc: "帖子评论及积分系统",
        },
        {
          time: "待定",
          desc: "交友系统",
        },
        {
          time: "待定",
          desc: "热门游戏库",
        },
        {
          time: "待定",
          desc: "用户绑定steam功能",
        },
        {
          time: "待定",
          desc: "steam相关功能开发(在线时长,游戏时间,Vac封禁记录)...",
        },
      ],
      computed: {
        menuAvtive() {
          return this.vuexNum;
        },
      },
    };
  },
  methods: {
    test() {
      this.$post("login", {}).then((res) => {
        console.log();
      });
    },
  },
};
</script>
<style lang='less' scoped>
#index {
  font-family: "Changa", sans-serif;
  font-weight: 500;
}
.eltimeline {
  width: 100%;
  min-height: 240px;
  padding: 10px;
  .time-line-only {
    width: 100%;
    margin: 0 auto;
  }
  .time-line-only-div {
    position: relative;
    min-height: 60px;
    padding-bottom: 10px;
    .p6 {
      position: relative;
      left: 5%;
      width: 15px;
      top: 25px;
      border-radius: 50%;
      z-index: 10;
      height: 15px;
      border: 1px solid #5cb85c;
      background: #fff;
    }
    .p7 {
      position: absolute;
      left: calc(5% + 7px);
      top: 25px;
      bottom: 0;
      z-index: 1;
      height: 100%;
      border-left: 1px solid #5cb85c;
    }
    .p8 {
      position: relative;
      left: calc(5% + 15px);
      border-radius: 10px;
      height: auto;
      width: calc(90% - 20px);
      margin-left: 20px;
      .spanl {
        width: 100%;
        font-size: 14px;
        min-height: 30px;
        line-height: 30px;
        display: inline-block;
        vertical-align: top;
        word-break: break-all;
        overflow: hidden;
        padding: 5px;
      }
    }
  }
}
</style>