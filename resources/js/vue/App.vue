<template>
  <router-link :to="{ name: 'Home' }">Home</router-link> |
  <router-link :to="{ name: 'ToDoListIndex' }">ToDo List</router-link>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>
