<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="title">Login</h1>

      <div class="field">
        <label>Name </label>
        <input type="text" v-model="Name" placeholder="Ім'я"/>
      </div>

      <div class="field">
        <label>Email</label>
        <input type="email" v-model="Email" placeholder="email@example.com" />
      </div>

      <div class="field">
        <label>Password</label>
        <input type="password" v-model="Password" placeholder="••••••••" />
      </div>
            <div class="ErrorNotification" v-if="error">
                {{ error }} 
            </div>
      <button class="login-button" @click="LogIn">Login</button>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import router from '../router';
const Name = ref('')
const Email = ref('')
const Password = ref('')
const error = ref('')

function LogIn() {
   if (!Name.value) {
    error.value = 'Введіть ім`я'
    return
  }

  if (!Email.value || !Email.value.includes('@')) {
    error.value = 'Введіть коректну електронну пошту'
    return
  }

  if (!Password.value) {
    error.value = 'Введіть пароль'
    return
  }

  error.value = ''
  router.push('/users')
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e1e2f; 
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
}

.login-card {
  background-color: #2c2c3e; 
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  width: 520px;
  color: #f5f5f5;
}

.login-card .title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.field label {
  margin-bottom: 6px;
  font-size: 14px;
}

.field input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #555;
  background-color: #1e1e2f;
  color: #f5f5f5;
}

.field input::placeholder {
  color: #888;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.login-button:hover {
  background-color: #2563eb;
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.ErrorNotification {
  margin: 12px;
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border-radius: 6px;
  text-align: center;
animation: fadeInOut 0.5s ease-in-out;
}

</style>
