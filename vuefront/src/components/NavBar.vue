<template>
    <div>
        <nav class="navBarTop navbar navbar-expand-lg fixed-top ">
            <div class="container-fluid">
                
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="navCenter  collapse navbar-collapse" id="navbarTogglerDemo01">
                <img src="https://i.postimg.cc/T1Ckqjx3/White-Neon-Green-Game-Logo-removebg-preview-1.png" style="width: 7rem;">
                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link"  href="/product">Products</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/history">History</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">Cart</a>
                  </li>             
                  <li class="nav-item">
                    <a class="nav-link" href="/resgister">Register</a>
                  </li>             

                </ul>
                <form class="d-flex" role="search">
                  <input id="btnSearch" class="form-control me-2" type="search" placeholder="SEARCH" aria-label="Search">
                  <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
              </div>

            </div>
          </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.navCenter{
    margin-left: 490px;
}

.navBarTop {
  background-image: url('https://i.postimg.cc/NjNLDHBp/298254-cut-sword-to-right-filter.jpg');
  font-size: 20px;
  position: fixed; 
  top: 0; 
  width: 100%;
  height: 80px;
  

}

.nav-item:hover {
  text-decoration: underline;
  text-decoration-color: rgb(147, 26, 26);
}

#btnSearch {
  background: rgba(122, 113, 113, 0.397);
  color: white;
}
</style>





