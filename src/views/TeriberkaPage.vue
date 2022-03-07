<template>
  <content-card
    :image="items[1].image"
    :title="items[1].title"
    :description="items[1].description"
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
