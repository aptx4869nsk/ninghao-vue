<template>
  <h3>{{ title_1 }}</h3>
  <AppButtonOne /> <app-button-one />

  <h3>{{ title_2 }}</h3>
  <app-button-two text="确定" /> <app-button-two />

  <h3>{{ title_3 }}</h3>
  <app-button-three text="确定" @tap="onTapAppButton" @init="onInitAppButton" />
  <app-button-three @tap="onTapAppButton" @init="onInitAppButton" />

  <h3>{{ title_4 }}</h3>
  <app-button-four @tap="onTapAppButton" @init="onInitAppButton">
    提交
  </app-button-four>
  <app-button-four />

  <h3>{{ title_5 }} , {{ title_6 }} , {{ title_7 }}</h3>
  <UserProfile />

  <h3>{{ title_8 }}</h3>
  <UserLogin />

  <h3>{{ title_9 }}</h3>
  <life-cycle />
</template>

<script>
import AppButtonOne from './components/app-button-one.vue';
import AppButtonTwo from './components/app-button-two.vue';
import AppButtonThree from './components/app-button-three.vue';
import AppButtonFour from './components/app-button-four.vue';
import UserProfile from './components/dynamic components/user-profile.vue';
import UserLogin from './components/自定义组件使用v-model/user-login.vue';
import LifeCycle from './components/life-cycle.vue';

export default {
  data() {
    return {
      title_1: 'Scoped: 限定组件样式的应用范围',
      title_2: 'props: Vue组件属性',
      title_3: '监听子组件的事件',
      title_4: 'slot: 在 Vue 组件里用插槽分发内容',
      title_5: '动态组件 (Dynamic Components)',
      title_6: 'keep-alive: 保持动态组件的活动状态',
      title_7: '$refs: 引用模板',
      title_8: '在自定义组件上使用v-model',
      title_9: 'Vue 组件的生命周期方法',
    };
  },

  methods: {
    onTapAppButton(text) {
      console.log('on tap app button', text);
    },

    onInitAppButton() {
      // console.log('on init app button');
    },
  },

  components: {
    AppButtonOne,
    AppButtonTwo,
    AppButtonThree,
    AppButtonFour,
    UserProfile,
    UserLogin,
    LifeCycle,
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>
