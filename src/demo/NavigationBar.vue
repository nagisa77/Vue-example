<template>
  <nav class="navbar">
    <div class="logo">Logo</div>
    <ul class="nav-links">
      <li class="nav-link-item">Home</li>
      <li class="nav-link-item">About</li>
      <li class="nav-link-item">Contact</li>
      <li class="nav-link-item">Login</li>
      <li class="nav-link-item">Register</li>
      <li class="nav-link-item">Logout</li>
      <li class="nav-link-item">Settings</li>
      <li class="nav-link-item">Help</li>
    </ul>

    <i class="pi pi-bars" @click="toggleMenu"></i>
  </nav>
  <MultiColumnLayout class="content"/>
</template>

<script>

import MultiColumnLayout from './MultiColumnLayout.vue';
import 'primeicons/primeicons.css'

export default {
  name: 'NavigationBar',
  components: {
    MultiColumnLayout,
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.querySelector('.nav-links').classList.toggle('show');
    }
  }
}

</script>

<style scoped>
.logo {
  font-size: 30px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
}

.navbar {
  height: 50px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: calc(100% - 40px);
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgb(200, 200, 200);       
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link-item {
  font-size: 15px;
  font-weight: lighter;
  font-family: 'Arial', sans-serif;
  list-style: none;
}

.content {
  margin-top: 60px;
}

.pi-bars {
  display: none;
}

@media (max-width: 768px) {
  .pi-bars {
    display: block;
  }

  .nav-links {
    position: absolute;
    padding: 0;
    top: 60px;
    flex-direction: column;
    left: 0;
    right: 0;
    text-align: center;
    background-color: rgb(200, 200, 200);           
    max-height: 0; 
    overflow: hidden;
    transition: max-height 0.5s ease-in-out; /* 添加过渡效果 */
    gap: 0;
    margin: 0;
  }
  
  .nav-links.show {
    max-height: 500px; 
  }

  .nav-link-item {
    left: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-link-item:hover {
    background-color: rgba(240, 240, 240, 1.0);
  }

  .nav-links.show {
    display: flex; 
  }
}

</style>