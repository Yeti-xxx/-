import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
      userInfo:''
    }
  },
  actions: {
    // 设置token
    setToken(token) {
      this.token = token;
    },
    // 退出token
    outLogin() {
      this.token = ''
      this.userInfo = ''
    },
    // 设置userInfo
    setUserInfo(userInfo){
      this.userInfo = userInfo
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [{
      key: 'xiaoluxian_user',
      storage: localStorage,
      //paths: ['token']
    }]
  }
})