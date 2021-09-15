<template>
  <div>用户登陆 {{ username }}</div>
  <!-- <AppInput :model-value="username" @update:model-value="username = $event" /> -->
  <AppInput v-model="username" />
</template>

<script>
import AppInput from './app-input.vue';
export default {
  data() {
    return {
      username: '',
    };
  },
  components: { AppInput },
};
</script>
