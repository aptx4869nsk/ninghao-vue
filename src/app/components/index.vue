<template>
  <div @click="onClickText">你好，欢迎访问我的网站！</div>
</template>

<script>
export default {
  methods: {
    onClickText() {
      //   this.$router.push('/about');
      this.$router.push({ name: 'about' });
      //   this.$router.replace('/about');
    },
  },
};
</script>
