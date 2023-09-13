import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import router from '@/router'
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()
import authUserInfo from '../services/authUserInfo'

const fetchApi = "https://capstoneswordall.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    addUser:null,


    products:null,
    product: null,
    signalView:null,
    editProduct:[],


    history:null,
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],


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
    setAddUser(state, data){
      state.addUser = data
    },
    // addToCart({ commit }, product) {
    //   commit('addToCart', product);
    // },
    addToCart(state, product) {
      state.cartItems.push(product);
      localStorage.setItem("cart", JSON.stringify(state.cartItems)); // Save to localStorage
    },
    removeFromCart(state, prodID) {
      console.log("Current cart items:", state.cartItems);
      state.cartItems = state.cartItems.filter(product => product.key.prodID !== prodID);
      console.log("Updated cart items:", state.cartItems);
      // Also update the local storage if needed
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, prodID) {
      state.cartItems = state.cartItems.filter(product => product.key.prodID !== prodID);
      localStorage.setItem("cart", JSON.stringify(state.cartItems)); // Save to localStorage
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


    registerProduct (state, product){
      state.users.push(product)
    },


    setHistory(state, history){
      state.history = history
    },
      setMsg(state, msg) {
        state.msg = msg
      },
      SET_PRODUCTS(state, products) {
        state.products = products;
      },


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

  async updateProducts(context, payload) {
    try {
      const response = await axios.patch(`https://capstoneswordall.onrender.com/product/${payload.prodID}`, payload);
      const productToEdit = response.data;
      context.dispatch("fetchAllProducts");
      sweet({
        title: "Product Updated",
        text: productToEdit.msg,
        icon: "success",
        timer: 2000
      });
    } catch (error) {
      console.error(error);
    }
  },


  //register
  // async addUser(context, payload) {
  //   try {
  //     const { msg } = (await axios.post(`${fetchApi}adduser`, payload)).data;
  //     if (msg) {
  //       sweet({
  //         title: "Registration",
  //         text: msg,
  //         icon: "success",
  //         timer: 4000,
  //       });
  //       context.dispatch("fetchUsers"); //where is the fetchUsers comign from //from backedn?
  //       router.push({ name: "login" });
  //     } else {
  //       sweet({
  //         title: "Error",
  //         text: msg,
  //         icon: "error",
  //         timer: 4000
  //       });
  //     }
  //   } catch (e) {
  //     context.commit("setMsg", "An error has occured");
  //   }
  // },




  // async addUser({ commit }, userData) {
  //   try {
  //     const response = await axios.post(`${fetchApi}users`, userData)
  //     commit('setAddUser', response.data)
  //     location.reload()
  //     console.log('testing');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, //summer
  async login(context, payload) {
    try {
      const { msg, token, result } = (
        await axios.post(`${fetchApi}login`, payload)
      ).data;
      if (result) {
        context.commit("setUser", { result, msg });
        cookies.set("AUser", { msg, token, result });
        authUserInfo.applyToken(token); //the var name that i changed


        sweet({
          title: msg,
          text: `Welcome back ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 4000,
        });
        router.push({ name: "home" });
      } else {
        sweet({
          title: "Error",
          text: msg,
          icon: "error",
          timer: 4000,
        });
      }
    } catch (e) {
      context.commit("setMsg", "An error has occured");
    }
  },
Logout(context){
  context.commit('setUser')
  cookies.remove("AUser")
},


async registerProduct(context, payload) {
  try {
    const response = await axios.post(`${fetchApi}addProduct`, payload);
    const { msg } = response.data;


    if (msg) {
      sweet({
        title: 'Registration',
        text: msg,
        icon: "success",
        timer: 3000,
      });
      context.dispatch("fetchAllUsers")
      router.push({ name: "login" });
    } else {
      sweet({
        title: "Error",
        text: msg,
        icon: "error",
        timer: 3000,
      });
    }
  } catch (e) {
    context.commit("setMsg", "An error occurred while adding the product");
  }
},

// CRUD FUNCTIONS
async addProduct(context, payload) {
  try {
    const { res } = await axios.post(`${fetchApi}product`, payload);
    const { msg, err } = await res.data;
    console.log(msg, err);
    if (msg) {
      context.dispatch("fetchAllProducts")
      context.commit("setProducts", msg);
    } else {
      context.commit("setMsg", err);
    }
  } catch (e) {
    context.commit("setMsg", "an error occured");
  }
},

async addUser(context, payload) {
  try {
    const { res } = await axios.post(`${fetchApi}user`, payload);
    const { msg, err } = await res.data;
    console.log(msg, err);
    if (msg) {
      context.dispatch("fetchAllUsers")
      context.commit("setUsers", msg);
    } else {
      context.commit("setMsg", err);
    }
  } catch (e) {
    context.commit("setMsg", "an error occured");
  }


},

  modules: {
  }
})