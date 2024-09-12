<template>
  <div class="chatgpt-container">
    <div class="left-menu" v-if="!isMenuCollapsed">
      <div class="header">
        <el-button class="chatgpt-menu-button icon-button">
          <img src="@/assets/icon/chatgpt-menu.svg" alt="ChatGPT Menu Icon" class="menu-icon" @click="toggleMenu">
        </el-button>
        <el-button class="chatgpt-menu-button icon-button">
          <img src="@/assets/icon/chatgpt-new-chat.svg" alt="ChatGPT Menu Icon" class="menu-icon">
        </el-button>
      </div>
    </div>

    <div class="chatgpt-main-container">
      <div class="header">
        <el-button class="chatgpt-button icon-button">
          <img src="@/assets/icon/chatgpt-menu.svg" alt="ChatGPT Menu Icon" class="menu-icon" @click="toggleMenu">
        </el-button>
        <el-button class="chatgpt-button icon-button">
          <img src="@/assets/icon/chatgpt-new-chat.svg" alt="ChatGPT Menu Icon" class="menu-icon">
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatGPT',
  data() {
    return {
      isMenuCollapsed: false, // 控制菜单是否收起
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuCollapsed = !this.isMenuCollapsed;
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}

.chatgpt-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.left-menu {
  background-color: var(--chatgpt-menu-background-color);
  width: 300px;
  height: 100vh;
}

.icon-button {
  border: none;
  width: 35px;
  height: 35px;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
}

.chatgpt-menu-button {
  background-color: var(--chatgpt-menu-background-color);
}

.chatgpt-menu-button:hover {
  background-color: var(--chatgpt-menu-button-hover-color);
}

.chatgpt-button {
  background-color: var(--chatgpt-background-color);
}

.chatgpt-button:hover {
  background-color: var(--chatgpt-button-hover-color);
}

.menu-icon {
  width: 20px;
  height: 20px;
  opacity: 0.5;
}

.chatgpt-main-container {
  width: 100%;
  height: 100vh;
}
</style>