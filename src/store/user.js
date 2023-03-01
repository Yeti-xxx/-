import { defineStore } from 'pinia'
export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: ''
    }
  },
  actions:{
  	setToken( token ){
  		this.token = token;
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