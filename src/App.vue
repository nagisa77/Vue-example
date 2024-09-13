<template>
  <div>
    <!-- Layout for pages that need navigation -->
    <header v-if="showMenu">
      <h1>Vue example</h1>
      <nav>
        <ul>
          <li><router-link to="/multi_column_layout">Multi column layout</router-link></li>
          <li><router-link to="/navigation_bar">Navigation bar</router-link></li>
          <li><router-link to="/i18n">I18N</router-link></li>
          <li><router-link to="/night_mode">Night Mode</router-link></li>
          <li><router-link to="/chatgpt">ChatGPT</router-link></li>
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
        '/navigation_bar',
        '/i18n',
        '/night_mode',
        '/chatgpt',
      ].includes(this.$route.path);
    }
  }
};
</script>