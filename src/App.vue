<template>
  <div>
    <!-- Layout for pages that need navigation -->
    <header v-if="showMenu">
      <h1>Vue example</h1>
      <nav>
        <ul>
          <li><router-link to="/multi_column_layout">Multi column layout</router-link></li>
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
        '/multi_column_layout', 
      ].includes(this.$route.path);
    }
  }
};
</script>
