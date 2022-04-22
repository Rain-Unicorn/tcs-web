export default {
    namespaced: true,
    state() {
        return {
            // 系统信息
            sysInfo: {
                menuActive: 0
            }
        }
    },
    mutations: {
        //   修改系统信息,payload就是系统信息对象
        setSys(state, sysInfo) {
            state.sysInfo = sysInfo
        }
    }
}