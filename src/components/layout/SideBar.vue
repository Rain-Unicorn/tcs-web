<template>
  <section>
    <aside class="sidebar is-show" id="sidebar">
      <div class="sidebar-box">
        <ul class="uk-nav">
          <li
            :class="
              vuexNum == index
                ? 'uk-active'
                : '' + item.grade == 0
                ? 'uk-nav-header'
                : ''
            "
            v-for="(item, index) in menuList"
            :key="index"
            @click="changeActive(index)"
          >
            <a v-if="item.grade === 1" :href="item.menuPath">
              <i :class="item.icon != '' ? item.icon : ''"></i>
              <span>{{ item.menuName }}</span>
            </a>
            <template v-if="item.grade === 0">
              {{ item.menuName }}
            </template>
          </li>
        </ul>
      </div>
    </aside>
  </section>
</template>
<script lang="ts">
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    HomeOutlined,
  },
  data() {
    return {
      menuList: [
        {
          menuName: "精选",
          grade: 1,
          menuPath: "/",
          icon: "ico_home",
        },
        {
          menuName: "圈子",
          grade: 0,
          menuPath: "/",
          icon: "",
        },
        {
          menuName: "动态",
          grade: 1,
          menuPath: "/",
          icon: "ico_streams",
        },
        {
          menuName: "帖子",
          grade: 1,
          menuPath: "/",
          icon: "ico_market",
        },
        {
          menuName: "热游",
          grade: 1,
          menuPath: "/",
          icon: "ico_store",
        },
        {
          menuName: "部落",
          grade: 1,
          menuPath: "/",
          icon: "ico_community",
        },
        {
          menuName: "支持",
          grade: 0,
          menuPath: "/",
          icon: "",
        },
        {
          menuName: "建议",
          grade: 1,
          menuPath: "/",
          icon: "ico_report",
        },
        {
          menuName: "帮助",
          grade: 1,
          menuPath: "/",
          icon: "ico_help",
        },
      ],
    };
  },
  // computed: {
  //   menuAvtive() {
  //     return this.num;
  //   },
  // },
  methods: {
    changeActive(index: any) {
      // this.menuAvtive = parseInt(index);
      this.$m.vuex("vuexNum", index);
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/main.css";
@import "../../assets/css/libs.min.css";
</style>