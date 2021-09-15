<template>
  <component :is="currentComponent"></component>
  <small @click="onClickHintText">{{ hintText }}</small>
</template>

<script>
import UserLogin from './dynamic components/user-login.vue';
import UserRegister from './dynamic components/user-register.vue';

export default {
  data() {
    return {
      hintText: '还没有账户，点击注册',
      currentComponent: 'UserLogin',
    };
  },

  beforeCreate() {
    console.log('user login before create');
  },

  created() {
    console.log('user login created');
  },

  beforeMount() {
    console.log('user login before mount');
  },

  mounted() {
    console.log('user login mounted');
  },

  unmounted() {
    console.log('user login unmounted');
  },

  updated() {
    console.log('user login updated');
  },

  methods: {
    onClickHintText() {
      switch (this.currentComponent) {
        case 'UserRegister':
          this.currentComponent = 'UserLogin';
          this.hintText = '还没有账户，点击注册';
          break;

        case 'UserLogin':
          this.currentComponent = 'UserRegister';
          this.hintText = '已有账户，点击登陆';
          break;
      }
    },
  },

  components: { UserLogin, UserRegister },
};
</script>
