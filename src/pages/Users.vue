<template>
  <div class="users-page">
    <aside class="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
        <li><button class="logout-button" @click="Logout">Logout</button></li>
        </ul>
    </aside>

    <main class="content">
      <h1>Users Page</h1>
                <div class="card">
<UserForm @add-user="addUserToList" />
                 </div>
        <div class="card">
<UserTable :users="users" @delete-user="deleteUser" />
        </div>
    </main>
  </div>
</template>

<script setup> 
import UserForm from '/src/components/Users/UserForm.vue'
import UserTable from '/src/components/Users/UserTable.vue'
import { ref } from 'vue'

const users = ref([])

function addUserToList(user) {
  users.value.push(user) 
}
function deleteUser(id) {
  users.value = users.value.filter(u => u.id !== id)
}
function Logout() {
  window.location.href = '/'
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

.users-page {
  display: flex;
  min-height: 100vh;
  background-color: #1e1e2f;
  color: #f5f5f5;
  font-family: 'Segoe UI', sans-serif;
}

.sidebar {
  width: 220px;
  background-color: #2c2c3e;
  padding: 20px;
  box-shadow: 2px 0 10px rgba(0,0,0,0.5);
}

.sidebar h2 {
  margin-bottom: 20px;
  font-size: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 12px;
  cursor: pointer;
  transition: color 0.2s;
}

.sidebar li:hover {
  color: #3b82f6;
}
.logout-button {
  background-color: #2c2c3e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
}
.logout-button:hover {
color: #3b82f6;
}

.content {
  flex: 1;
  padding: 30px;
}
.content h1 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #fff;
}

.card {
  background-color: #2c2c3e;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}
</style>
