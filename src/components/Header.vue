<template>
   
        <!-- Navbar Start -->
 <nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" class="navbar-brand d-block d-lg-none">
            <h1 class="m-0 text-uppercase text-white"><i class="fa fa-birthday-cake fs-1 text-primary me-3"></i>CakeZone</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto mx-lg-auto py-0">
                <router-link to="/" class="nav-item nav-link active">Home</router-link>
                <router-link to="/about" class="nav-item nav-link">About Us</router-link>
                <router-link to="/menu" class="nav-item nav-link">Menu & Pricing</router-link>
                <router-link to="/team" class="nav-item nav-link">Master Chefs</router-link>
                <div class="nav-item dropdown">
                    <router-link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</router-link>
                    <div class="dropdown-menu m-0">
                        <router-link to="/service" class="dropdown-item">Our Service</router-link>
                        <router-link to="/testimonial" class="dropdown-item">Testimonial</router-link>
                    </div>
                </div>
                <router-link to="/contact" class="nav-item nav-link">Contact Us</router-link>
            </div>
        </div>
    </nav>
    <!-- Navbar End -->

 
  
</template>

<script>


</script>


<style>


</style>