<template>
  <div class="todoListContainer">
    <div class="heading">
        <h2 id="title">Todo List</h2>
        <add-item-form v-on:reloadList="getTodos"></add-item-form>
    </div>
    <list-view :items="items" v-on:reloadList="getTodos"></list-view>
  </div>
</template>

<script>
import AddItemForm from "./ToDoList/AddItemForm.vue";
import ListView from "./ToDoList/ListView.vue";
import axios from "axios";
export default {
  components: { AddItemForm, ListView },
  data() {
    return {
        items: []
    }
  },
  methods: {
    getTodos() {
        axios
            .get("/api/items")
            .then((response) => {
                this.items = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }
  },
  created() {
    this.getTodos();
  }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background-color: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>
