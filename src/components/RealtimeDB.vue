<script setup>
import { useDatabaseList } from 'vuefire'
import { getDatabase, set, ref as dbRef } from "firebase/database";
// const todos = useDatabaseList(dbRef(db, 'todos'))
// const someTodo = useDatabaseObject(dbRef(db, 'todos', 'someId'))
function writeUserData(userId, name, email) {
  console.log('writeUserData',userId);
  const db = getDatabase();
  set(dbRef(db, 'users/' + userId), {
    username: name,
    email: email
  });
}
writeUserData('1','Alex','Alexander@mail.com')
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.text }}</span>
    </li>
  </ul>
</template>