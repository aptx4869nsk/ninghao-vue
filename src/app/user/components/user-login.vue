<template>
  <div>
    <input type="text" placeholder="用户名" v-model="name" />
    <input
      type="password"
      placeholder="用户名"
      v-model="password"
      @keyup.enter="login"
    />
    <button @click="login">登陆</button>
  </div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';
export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    async login() {
      console.log(this.name, this.password);

      try {
        const response = await apiHttpClient.post('/login', {
          name: this.name,
          password: this.password,
        });

        console.log(response.data);

        this.$emit('login-success', response.data);
      } catch (error) {
        console.log(error.response);

        this.$emit('login-error', error.response);
      }
    },
  },
};
</script>
