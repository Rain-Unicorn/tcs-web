<template>
  <section>
    <div class="page-header__inner">
      <div class="page-header__sidebar">
        <div class="page-header__menu-btn">
          <button
            class="menu-btn ico_menu is-active"
            @click="turnRight"
          ></button>
        </div>
        <div class="page-header__logo">
          <img src="@/assets/img/logo2.png" alt="logo" /><span
            class="page-header__logo_text"
            >橘子部落</span
          >
        </div>
      </div>
      <div class="page-header__content">
        <div class="page-header__search">
          <div class="search">
            <div class="search__input">
              <i class="ico_search"></i
              ><input type="search" name="search" placeholder="Search" />
            </div>
            <div class="search__btn">
              <button type="button"><i class="ico_microphone"></i></button>
            </div>
          </div>
        </div>
        <div>
          <!-- <div class="page-header__action">
            <a class="action-btn" href=""
              ><i class="ico_message"></i><span></span
            ></a>
            <a class="action-btn" href=""
              ><i class="ico_notification"></i><span></span
            ></a>
            <a class="profile" href=""
              ><img src="@/assets/img/profile.png" alt="profile"
            /></a>
          </div> -->
          <div><a @click="login">登录</a></div>
        </div>
      </div>
    </div>
  </section>
  <div class="org_dialog">
    <el-dialog v-model="loginModal" width="800px">
      <div class="login">
        <div class="login-type box">
          <div class="fly logo-wrap">
            <span>橘子</span>
            <div><img src="@/assets/img/logo2.png" /></div>
            <span>部落</span>
          </div>
          <div class="logo-content">
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item
                v-for="(item, index) in bannerList"
                :key="index"
              >
                <!-- <h3>{{ item }}</h3> -->
                <div class="banner-item">
                  <img :src="item.url" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="login-form box">
          <div class="login-header">
            <span
              @click="changeTab"
              class="switch-item"
              :class="{ acvited: !acvited }"
              >账号登录</span
            >
            <span
              @click="changeTab"
              class="create-item"
              :class="{ acvited: acvited }"
              >短信登录</span
            >
          </div>
          <div class="pass-form">
            <el-input
              v-model="input1"
              class="w-50 m-2 accout"
              size="large"
              placeholder="手机号/邮箱/用户名"
            />
            <el-input
              v-model="input2"
              class="w-50 m-2"
              size="large"
              placeholder="密码"
            />
          </div>
          <div class="forget">忘记密码？</div>
          <div class="btn-login">
            <el-button color="#4e6ef2" plain>登录</el-button>
          </div>
          <div class="register">立即注册</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      loginModal: false,
      isActive: 1,
      bannerList: [
        {
          url: new URL("../../assets/img/banner/rust.jpg", import.meta.url)
            .href,
        },
        {
          url: new URL("../../assets/img/banner/ban2.jpeg", import.meta.url)
            .href,
        },
        {
          url: new URL("../../assets/img/banner/ban3.jpeg", import.meta.url)
            .href,
        },
      ],
      acvited: false,
      input1: "",
      input2: "",
      listTab: [
        {
          id: 1,
          name: "用户登录",
        },
      ],
    };
  },
  methods: {
    login() {
      this.loginModal = true;
    },
    changeTab() {
      this.acvited = !this.acvited;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/main.css";
@import "../../assets/css/libs.min.css";

.banner-item {
  display: flex;
  align-items: center;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.fly {
  display: flex;
  align-items: flex-end;
}
.register {
  display: flex;
  justify-content: flex-end;
  margin-right: 24px;
  margin-top: 20px;
  cursor: pointer;
  color: #4e6ef2;
}
.logo-wrap {
  font-weight: bold;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 0 32px;
  div {
    width: 30px;
    height: auto;
    margin: 0 2px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.logo-content {
  // border-right: 1px solid #ffe4e1;
  padding: 0 32px;
  height: 250px;
}
.action-btn img {
  width: 24px;
  height: 24px;
}
.profile img {
  width: 24px;
  height: 24px;
}
.forget {
  display: flex;
  justify-content: right;
  margin-top: 20px;
  margin-right: 32px;
  margin-bottom: 14px;
  font-size: 14px;
  color: #4e6ef2;
  cursor: pointer;
}
.accout {
  margin-bottom: 14px;
}
.btn-login {
  padding: 0 32px;
}
.org_dialog {
  :deep(.el-dialog) {
    border-radius: 25px;
  }
  :deep(.el-dialog__header) {
    padding: 0;
  }
  :deep(.el-dialog__body) {
    padding: 0;
  }
  :deep(.el-input--large .el-input__wrapper) {
    padding: 10px 20px;
    height: 30px;
  }
  :deep(.el-input--large .el-input__inner) {
    font-size: 18px;
  }
  :deep(.el-button) {
    height: 48px;
    width: 100%;
  }
  :deep(.btn-login button) {
    background: #4e6ef2;
    color: #ffffff;
  }
}
.login {
  width: 100%;
  height: 380px;
  display: flex;
}
.login .box {
  width: 50%;
  height: 380px;
}
.login-header {
  font-size: 18px;
  line-height: 18px;
  font-weight: 300;
  padding: 0 32px 11px;
  margin-bottom: 0;
  display: flex;
  margin-top: 35px;
}
.switch-item {
  margin-right: 36px;
  position: relative;
  cursor: pointer;
}
.create-item {
  position: relative;
  cursor: pointer;
}
.acvited::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: #4e6ef2;
  border-radius: 1px;
}
.pass-form {
  padding: 0 32px;
  margin-top: 37px;
}
</style>