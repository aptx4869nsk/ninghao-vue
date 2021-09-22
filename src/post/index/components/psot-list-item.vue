<template>
  <div>
    <router-link :to="{ name: 'postShow', params: { postId: item.id } }">
      {{ item.title }}
    </router-link>
    -
    <small>{{ item.user.name }}</small>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: Object,
  },
});
</script>
