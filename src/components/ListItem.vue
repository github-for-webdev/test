<template>
  <div class="item-wrapper d-flex flex-column mb-4">
    <img :src="require(`@/assets/img/${image}`)" class="mb-3" :alt="image" />
    <h3 class="">{{ title }}</h3>
    <div class="description">
      {{ description }}
      <br />
      <!-- <span>Читать далее ...</span> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
