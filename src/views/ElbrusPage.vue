<template>
  <router-link to="/">
    <div class="col-lg-10 offset-1">
      <img
        class="mb-4 w-100"
        :src="require(`@/assets/img/${items[2].image}`)"
        :alt="items[2].image"
      />
      <h2>{{ items[2].title }}</h2>
      <div class="description">
        {{ items[2].description }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters["getItems"];
    },
  },
};
</script>
