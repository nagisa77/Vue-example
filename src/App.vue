<template>
  <div>
    <!-- Layout for pages that need navigation -->
    <header v-if="showMenu">
      <h1>Vue example</h1>
      <nav>
        <ul>
          <li><router-link to="/demo1">demo1</router-link></li>
          <li><router-link to="/demo2">demo2</router-link></li>
          <li><router-link to="/demo3">demo3</router-link></li>
        </ul>
      </nav>
    </header>
    <!-- View for routing -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showMenu() {
      return ![
        '/demo1', 
        '/demo2', 
        '/demo3',
      ].includes(this.$route.path);
    }
  }
};
</script>
