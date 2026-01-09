<template>
  <div class="UserList">
    <div class="UserStat">
      <label>Ім'я </label>
      <input type="text" v-model="name" placeholder="Ім'я" />
    </div>

    <div class="UserStat">
      <label>Пошта</label>
      <input type="email" v-model="email" placeholder="email@example.com" />
    </div>

    <button class="NewUser" v-on:click="submitForm">
      Add User
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')

// emit события родителю
const emit = defineEmits(['add-user'])

function submitForm() {
  if (!name.value || !email.value) return

  const newUser = {
    id: Date.now(),
    name: name.value,
    email: email.value
  }

  emit('add-user', newUser)

  name.value = ''
  email.value = ''
}
</script>

<style>
.UserStat {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.UserStat label {
  margin-bottom: 6px;
  font-size: 14px;
}

.UserStat input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #555;
  background-color: #1e1e2f;
  color: #f5f5f5;
}

.UserStat input::placeholder {
  color: #888;
}

.NewUser {
  max-width: 100%;
  padding: 10px;
  background-color: #2d2d47;
  color: #fff;
  border: 1px solid rgb(151, 150, 150);
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.NewUser:hover {
  background-color: #453f80;
}

</style>
