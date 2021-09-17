<template>
  <!-- <h3>{{ $store.state.name }}</h3> -->
  <!-- <h3>{{ appName }}</h3> -->
  <h3 @click="onClickName">
    {{ name }}
    <span v-if="loading">加载中...</span>
  </h3>

  <!-- {{ user.currentUser }} -->
  {{ currentUser }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    //...mapState(['name']),
    // ...mapState({
    //   appName: 'name',
    // }),
    // ...mapGetters(['name']),
    ...mapState(['loading', 'user']),
    ...mapGetters({
      name: 'name',
      currentUser: 'user/currentUser',
    }),
  },

  created() {
    // this.$store.dispatch('getName'); //
    this.getName();
    this.getCurrentUser();
  },

  methods: {
    ...mapMutations(['setName']),

    ...mapActions({
      getName: 'getName',
      getCurrentUser: 'user/getCurrentUser',
    }),

    onClickName() {
      if (this.$store.state.name === 'Hello World') {
        //this.$store.commit('setName', '世界就是如此美妙~');
        this.setName('世界就是如此美妙~');
      } else {
        this.setName('Hello World');
        //this.$store.commit('setName', 'Hello World');
      }
    },
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>
