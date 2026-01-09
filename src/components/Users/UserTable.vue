<template>
    <div v-if="users.length === 0" class="empty-message">
Відсутні зареєстровані користувачі
    </div>
    <div v-else>
      <div class="users-list">
        <div v-for="user in users" :key="user.id" class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
        </div>
    </div>
    </div>
</template>

<script setup>
const props = defineProps({
  users: Array
})
</script>

<style scoped>
.users-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.user-card {
  background-color: #2c2c3e; /* как карточки Users.vue */
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  min-width: 200px;
  color: #f5f5f5;
}

.user-card h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
}

.user-card p {
  margin: 0;
  font-size: 14px;
  color: #ccc;
}
</style>
