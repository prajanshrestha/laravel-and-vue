import { createWebHistory, createRouter } from "vue-router";
import Home from "./vue/ToDoList/Pages/Home.vue";
import ToDoListIndex from "./vue/ToDoList/Pages/ToDoListIndex.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/toDoListIndex",
        name: "ToDoListIndex",
        component: ToDoListIndex
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
