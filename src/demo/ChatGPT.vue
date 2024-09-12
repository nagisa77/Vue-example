<template>
  <div :class="{'chatgpt-container': true, 'is-collapsed': isMenuCollapsed}">
    <div class="left-menu" v-if="!isMenuCollapsed">
      <div class="header">
        <el-button class="chatgpt-menu-button icon-button">
          <img :src="isMobile ? mobileMenuIcon : menuIcon" alt="ChatGPT Menu Icon" class="menu-icon" @click="toggleMenu">
        </el-button>
        <el-button class="chatgpt-menu-button icon-button">
          <img :src="newChatIcon" alt="ChatGPT Menu Icon" class="menu-icon">
        </el-button>
      </div>
    </div>

    <div class="chatgpt-main-container">
      <div class="header">
        <el-button class="chatgpt-menu-button icon-button">
          <img :src="isMobile ? mobileMenuIcon : menuIcon" alt="ChatGPT Menu Icon" class="menu-icon" @click="toggleMenu">
        </el-button>
        <el-button class="chatgpt-model-select-button icon-button">
          ChatGPT 4o
          <img :src="arrowDownIcon" alt="ChatGPT Menu Icon" class="chatgpt-model-select-icon menu-icon">
        </el-button>
        <el-image :src="avatarIcon" alt="ChatGPT Menu Icon" class="chatgpt-avatar-icon"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatGPT',
  data() {
    return {
      isMenuCollapsed: false,
      isMobile: false,
      menuIcon: require('@/assets/icon/chatgpt-menu.svg'),
      mobileMenuIcon: require('@/assets/icon/chatgpt-mobile-menu.svg'),
      newChatIcon: require('@/assets/icon/chatgpt-new-chat.svg'),
      arrowDownIcon: require('@/assets/icon/chatgpt-arrow-down-icon.svg'),
      avatarIcon: 'https://blog-1307107697.cos.ap-shanghai.myqcloud.com/logo.png'
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuCollapsed = !this.isMenuCollapsed;
    },
    handleMediaChange(e) {
      this.isMobile = e.matches;

      // if (this.isMobile && !this.isMenuCollapsed) {
      //   this.toggleMenu();
      // }
    }
  },
  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    mediaQuery.addEventListener('change', this.handleMediaChange);
    this.handleMediaChange(mediaQuery); // 初始化时检查媒体状态
  },
  beforeUnmount() {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    mediaQuery.removeEventListener('change', this.handleMediaChange);
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
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
  transition: width 0.3s ease;
}

.icon-button {
  border: none;
  height: 35px;
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  color: var(--chatgpt-text-color);
}

.is-collapsed .left-menu {
  width: 0;
}

.is-collapsed .chatgpt-main-container {
  width: 100%;
}


.chatgpt-menu-button {
  background-color: var(--chatgpt-menu-background-color);
}

.chatgpt-avatar-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
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

.chatgpt-model-select-button:hover {
  background-color: var(--chatgpt-button-hover-color);
  color: var(--chatgpt-text-color);
}

.menu-icon {
  width: 20px;
  height: 20px;
  opacity: 0.5;
}

.chatgpt-main-container {
  width: calc(100% - 300px);
  transition: width 0.3s ease;
}

.chatgpt-model-select-icon {
  margin-left: 8px;
  width: 15px;
  height: 15px;
}

@media (max-width: 600px) {
  .left-menu {
    position: absolute;
    z-index: 1000;
    background-color: var(--chatgpt-background-color);
    border-right: 1px solid var(--chatgpt-menu-button-hover-color);
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.05); /* 向右的阴影 */
  }

  .chatgpt-main-container {
    width: 100%;
  }

  .chatgpt-menu-button {
    background-color: var(--chatgpt-background-color);  
  }
  
  .chatgpt-menu-button:hover {
    background-color: var(--chatgpt-button-hover-color);  
  }
}
</style>