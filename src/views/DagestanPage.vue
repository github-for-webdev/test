<template>
  <content-card
    :image="items[0].image"
    :title="items[0].title"
    :description="items[0].description"
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
