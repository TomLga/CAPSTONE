import { createStore } from 'vuex'
import axios from 'axios'
const fetchApi = "https://capstoneswordall.onrender.com/"


export default createStore({
  state: {
    users: null,
    user: null,

    products:null,
    product: null,
    signalView:null,

    history:null,

    token:null,
    msg:null
    // category and spinner 
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
    setSignalView(state, signalView){
      state.signalView =signalView
    },


    setHistory(state, history){
      state.history = history
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
    },

    async fetchHistory(context) {
      try {
        const { data } = await axios.get(`${fetchApi}History`)
        context.commit("setHistory", data.results)
      } catch (e) {
        console.error("Error fetching history:", e)
        context.commit("setMsg", "An error occurred while fetching history.")
      }
    },

    async fetchAllUsers(context){
      try{
        const {data} = await axios.get(`${fetchApi}users`)
        context.commit("setUsers", data.results)
      } catch(e){
        context.commit("setMsg", "an Error occ")
      }
    }
    
  },















  modules: {
  }
})
