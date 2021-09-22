<template>
  <router-link to="/">
    <h3>{{ name }}</h3>
  </router-link>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>
