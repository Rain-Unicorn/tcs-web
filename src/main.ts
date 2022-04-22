import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import installMaxerStore, { Maxer } from './store/maxer.mixin'
import initStorePersistence from './store/persistence'

//引入封装好的axios
import commonAxios from './plugins/request';

//引入布局公共组件
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import SideBar from './components/layout/SideBar.vue'
import MainWrap from './components/layout/MainWrap.vue'


import ElementPlus from 'element-plus'


const app = createApp(App)

app.component("v-header", Header);
app.component("v-footer", Footer);
app.component("v-sidebar", SideBar);
app.component("v-mainwrap", MainWrap);


// 声明全局组件 防止需要this调用时不能识别类型
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $m: Maxer;  // 声明全局方法
    }
}
installMaxerStore(app) // 全局混入vuex
initStorePersistence(store) // 初始化持久化vuex
app.use(store)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(commonAxios)
app.mount('#app')
