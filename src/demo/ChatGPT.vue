<template>
  <div :class="{ 'chatgpt-container': true, 'is-collapsed': isMenuCollapsed }">
    <div class="left-menu">
      <div class="menu-container" v-if="!isMenuCollapsed">
        <div class="header">
          <el-button class="chatgpt-menu-button icon-button">
            <img :src="isMobile ? mobileMenuIcon : menuIcon" alt="ChatGPT Menu Icon" class="menu-icon"
              @click="toggleMenu">
          </el-button>
          <el-button class="chatgpt-menu-button icon-button">
            <img :src="newChatIcon" alt="ChatGPT Menu Icon" class="menu-icon">
          </el-button>
        </div>
      </div>
    </div>

    <div class="chatgpt-main-container">
      <div class="header">
        <div v-if="isMainContainerMenuItemShow">
          <el-button class="chatgpt-button icon-button">
            <img :src="isMobile ? mobileMenuIcon : menuIcon" alt="ChatGPT Menu Icon" class="menu-icon"
              @click="toggleMenu">
          </el-button>
          <el-button class="chatgpt-button icon-button">
            <img :src="newChatIcon" alt="ChatGPT Menu Icon" class="menu-icon">
          </el-button>
        </div>

        <el-button class="chatgpt-model-select-button icon-button">
          ChatGPT 4o
          <img :src="arrowDownIcon" alt="ChatGPT Menu Icon" class="chatgpt-model-select-icon menu-icon">
        </el-button>

        <div>
          <el-image :src="avatarIcon" alt="ChatGPT Menu Icon" class="chatgpt-avatar-icon"></el-image>
        </div>
      </div>
      
      <div class="logo-container">
        <img :src="logoIcon" alt="ChatGPT Icon" class="chatgpt-logo-icon">
      </div>

      <div class="input-area-container">
        <div class="input-area-left">
          <img :src="linkIcon" alt="ChatGPT Icon" class="chatgpt-link-icon input-area-icon">
          <input v-model="inputValue" placeholder="给“ChatGPT”发送信息" class="chatgpt-input" />
        </div>
        <el-button class="chatgpt-send-button">
          <img :src="sendIcon" alt="ChatGPT Icon" class="chatgpt-send-icon input-area-icon">
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
      isMenuCollapsed: false,
      isMobile: false,
      menuIcon: require('@/assets/icon/chatgpt-menu.svg'),
      mobileMenuIcon: require('@/assets/icon/chatgpt-mobile-menu.svg'),
      newChatIcon: require('@/assets/icon/chatgpt-new-chat.svg'),
      arrowDownIcon: require('@/assets/icon/chatgpt-arrow-down-icon.svg'),
      avatarIcon: 'https://blog-1307107697.cos.ap-shanghai.myqcloud.com/logo.png',
      logoIcon: require('@/assets/icon/chatgpt-logo.svg'),
      linkIcon: require('@/assets/icon/chatgpt-link.svg'),
      sendIcon: require('@/assets/icon/chatgpt-send-icon.svg')
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

  computed: {
    isMainContainerMenuItemShow() {
      if (this.isMobile) {
        return true;
      }
      return this.isMenuCollapsed;
    },
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

.input-area-left {
  display: flex;
  align-items: center;
}

.chatgpt-logo-icon {
  width: 48px;
  height: 48px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chatgpt-send-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--chatgpt-text-color);
  margin-right: 10px;
  border: none;
}

.input-area-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--chatgpt-menu-background-color);
  border-radius: 25px;

  margin: 30px;
  width: calc(100% - 60px);
  max-width: 500px;
  align-self: center;
}

.chatgpt-input {
  height: 51px;
  border: none;
  outline: none;
  background-color: var(--chatgpt-menu-background-color);
  font-size: 14px;
}

.input-area-icon {
  margin-left: 15px;
  margin-right: 15px;
}

.chatgpt-send-icon {
  background-color: transparent;
  filter: brightness(0) invert(1);
  width: 30px;
  height: 30px;
}

.chatgpt-link-icon {
  width: 23px;
  height: 23;
}

.left-menu {
  background-color: var(--chatgpt-menu-background-color);
  width: 250px;
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
  width: calc(100% - 250px);
  height: 100vh;
  transition: width 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--chatgpt-background-color);
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
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.05);
    /* 向右的阴影 */
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