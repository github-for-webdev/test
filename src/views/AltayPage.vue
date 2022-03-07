<template>
  <content-card
    :image="items[5].image"
    :title="items[5].title"
    :description="items[5].description"
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
