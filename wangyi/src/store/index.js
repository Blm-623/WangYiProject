import Vue from 'vue'
import Vuex from 'vuex'
import {request} from '../request/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexData:{}
  },
  mutations: {
    // 更新主页数据
    updataIndexData(store,newData){
      store.indexData = newData 
      // console.log( store.indexData.data.categoryHotSellModule)
    },
    // 更新分类数据
    // gupcategoryData(store){

    // }
  },
  actions: {
   async indexfun({commit}){
      let result = await request('/getindexData')
      // console.log(result)
      commit('updataIndexData',result.data)
    },
  // async  getcategoryData({commit}){
  //           let result = await request('/categoryDatas')
  //           commit()
  //   }
  },
  modules: {
  }
})
