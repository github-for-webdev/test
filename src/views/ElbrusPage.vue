<template>
  <content-card
    :image="items[2].image"
    :title="items[2].title"
    :description="items[2].description"
  ></content-card>
</template>

<script>
import ContentCard from "@/components/ContentCard.vue";

export default {
  components: {
    ContentCard,
  },
  computed: {
    items() {
      return this.$store.getters["getItems"];
    },
  },
};
</script>
