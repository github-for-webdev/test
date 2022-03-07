<template>
  <div class="grid d-flex justify-content-between flex-wrap">
    <router-link v-for="item in items" :key="item.id" :to="item.link">
      <list-item
        :image="item.image"
        :title="item.title"
        :description="item.description"
      ></list-item>
    </router-link>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  computed: {
    items() {
      return this.$store.getters["getItems"];
    },
  },
};
</script>
