<template>
  <content-card
    :image="items[3].image"
    :title="items[3].title"
    :description="items[3].description"
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
