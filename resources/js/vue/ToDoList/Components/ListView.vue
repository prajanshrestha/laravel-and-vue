<template>
  <div v-for="(item, index) in items" :key="index">
    <item-list :item="item" class="item" v-on:itemChanged="$emit('reloadList')"></item-list>
  </div>
</template>

<script>
import ItemList from "./ItemList.vue";
export default {
    components: {
        ItemList
    },
    props: {
        items: {
            required: false
        }
    },
    emits: {
        reloadList: null,
    },
}
</script>

<style scoped>
.item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>
