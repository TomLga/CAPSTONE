<template>
  <div>
    <nav>
        <ul class="navbar fixed-top navBarTop">
          <a href="/"><img class="img-fluid logo" style="width: 6rem;" src="https://i.postimg.cc/T1Ckqjx3/White-Neon-Green-Game-Logo-removebg-preview-1.png" alt="" srcset=""></a>
          
          <router-link to="/" :class="{ active: $route.name === 'Home' }">Home</router-link>
          <!-- <router-link to="/contact" :class="{ active: $route.name === 'contact' }">Conatct</router-link> -->

            <!-- <li class="dropdown">

                <a href="#">SHOP &#9662;</a>
                <ul class="dropdown-content">
                    <li><a href="/product">Products</a></li>
                    <li><a href="/cart">Cart</a></li>
         
                  </li>
                </ul> -->

                <li><router-link to="/productsView" :class="{ active: $route.name === 'prodView' }">Shop</router-link></li>
                
                <li><router-link to="/history" :class="{ active: $route.name === 'history' }">History</router-link></li>
                
                <li class="dropdown">
                  <router-link to="/about" :class="{ active: $route.name === 'about'}">About/Contact</router-link>
                <ul class="dropdown-content">
                  <li> <a href="/about">About</a></li>
                  <li> <a href="/contact">Contact</a> </li>
                </ul>
              </li>

              <li>
                <router-link to="/cart" :class="{ active: $route.name === 'cart' }"> <i class="fa-solid fa-cart-shopping"></i></router-link>
               
              
              
              </li>


            <li class="dropdown accDrop">
                <a href="#">Account &#9662;</a>
                <ul class="dropdown-content">
                  <router-link to="/profile" :class="{ active: $route.name === 'profile'}">
            <img
              src="https://i.postimg.cc/ncxd04Nf/profile-circle-icon-2048x2048-cqe5466q.png"
              style="width: 3rem; background-color: antiquewhite; border-radius:100%;"
            />View
                  </router-link>
                  <li><router-link to="/addNewUser" :class="{ active: $route.name === 'addNewUser'}">Register</router-link></li>
                <li> <router-link to="/resgister" :class="{ active: $route.name === 'resgister'}">Login</router-link></li>
                <li> <router-link to="/logout" :class="{ active: $route.name === 'logout'}">logout</router-link></li>
                </ul>
            </li>


        </ul>
    </nav>
  </div>
</template>

<style>
.navBarTop {
  background-image: url("https://i.postimg.cc/NjNLDHBp/298254-cut-sword-to-right-filter.jpg");
  font-size: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
}

.nav-item:hover {
  text-decoration: underline;
  text-decoration-color: rgb(147, 26, 26);
}

.proImg:hover {
  background: rgb(0, 153, 255);
}

/* drop down  */

.nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: inline-block;
  margin-right: 15px;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #e90000;
  list-style-type: none;
  padding: 0;
}

.nav-item:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  color: #000000;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #555;
}

/* Reset some default styles */
body {
  margin: 0;
  padding: 0;

}

/* Style the navbar */
nav {
  background-color: #333;
  color: #fff;
}

.navbar {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
 
}

.navbar li {
  margin-right: 20px;
}

.navbar a {
  text-decoration: none;
  color: #fff;
  font-style: italic;
}
.navbar a:active{
  color: crimson !important
}

/* Style the dropdown menu */
.dropdown {

  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #333;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content li {
  padding: 10px;
}

.dropdown:hover .dropdown-content {
  display: block;
}


.navbar a:hover {
  color: #ff5733;
}






@media (max-width: 470px) {
  .navbar a {
    font-size: 15px; 
    margin-bottom: 3px;
    
  }
}
@media (max-width: 655px) {
  .logo{
    display: none;
  }

}

.navbar a[href="/product"]:active {
  color: blue;
}

.accDrop a{
  margin-right: 20px;
}
</style>

