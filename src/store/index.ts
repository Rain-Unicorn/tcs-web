import { createStore } from 'vuex'
import user from './modules/user'
import sys from './modules/sys'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    // modules: {
    //     user,
    //     sys
    // },
    state: {
        vuexNum: 0,
        vuexIsLogin: false,        // 当前的登录状态
        vuexTestVar: "测试变量",
        vuexUser: {
            num: 0,
            test: 1,
            name: "WuYunLong"
        }
    },
    mutations: {
        $changeStore(state: any, payload: any) {
            // 判断是否为多层级调用
            console.log(state)
            console.log(payload)
            const nameArr = payload.name.split('.');
            const len = nameArr.length;
            if (len >= 2) {

                let obj = state[nameArr[0]];
                for (let i = 1; i < len - 1; i++) {
                    obj = obj[nameArr[i]];
                }
                obj[nameArr[len - 1]] = payload.value;
            } else {
                state[payload.name] = payload.value;
                console.log(state[payload.name])
            }
        }
    }
})