<template>
    <el-row :gutter="0" class="login-container">
      <el-col :span="18" :md="10" :lg="8">
        <el-card shadow="hover">
          <div class="form-container">
            <h2 class="title">Login...</h2>
            <el-form ref="loginForm" :model="loginForm" :rules="rules" label-position="top">
              <el-form-item label="Username" prop="username">
                <el-input v-model="loginForm.username" placeholder="Enter your username"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="Enter your password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="login-button" type="primary" @click="handleLogin">Login</el-button>
              </el-form-item>
            </el-form>
          </div>

          <el-button @click="toggleTheme" class="toggle-button">
            {{ isDarkMode ? '切换到白天模式' : '切换到夜间模式' }}
          </el-button>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  name: 'NightMode',
  setup() {
    const loginForm = reactive({
      username: '',
      password: '',
    });

    const rules = {
      username: [{ required: true, message: 'Please input your username', trigger: 'blur' }],
      password: [{ required: true, message: 'Please input your password', trigger: 'blur' }],
    };

    const handleLogin = () => {
      console.log('Login clicked:', loginForm);
    };

    const isDarkMode = ref(false);

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    watch(isDarkMode, (newVal) => {
      if (newVal) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    });

    return {
      loginForm,
      rules,
      handleLogin,
      isDarkMode,
      toggleTheme,
    };
  },
};
</script>

<style scoped>

.night-mode-container {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
}

.login-container {
  margin: -10px;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  /* 使用背景颜色变量 */
}

.el-card {
  background-color: var(--card-background-color);
  color: var(--text-color);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  color: var(--text-color);
}

.login-button {
  width: 100%;
  margin-top: 20px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--text-color);
  color: var(--background-color);
}
</style>