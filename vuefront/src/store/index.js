import { createStore } from 'vuex'
import axios from 'axios'
const fetchApi = "https://capstoneswordall.onrender.com/"


export default createStore({
  state: {
    users: null,
    user: null,

    products:null,
    product: null,

    token:null,
    msg:null
    // category and spinner 
  },
  getters: {
  },

  mutations: {
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
    },
      setMsg(state, msg) {
        state.msg = msg
      }

  },

  actions: {
    // fetch all products
    async fetchAllProducts(context){
      try{
        const {data} = await axios.get(`${fetchApi}Allproducts`)
        context.commit("setProducts", data.results)
      } catch(e){
        context.commit("setMsg", "an Error occ")
      }
    }
  },















  modules: {
  }
})
