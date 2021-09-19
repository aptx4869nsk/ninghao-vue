<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
  <div @click="username = 'WANGHAO'">{{ username }}</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  // Composition API 组合式接口
  setup() {
    // 声明具有反应特性的数据 ref
    const name = ref('宁皓网');

    // 声明具有反应特性的数据 reactive
    const user = reactive({
      username: '王皓',
    });

    //const { username } = toRefs(user);

    return {
      name,
      //   username,
      ...toRefs(user), // 这样在组件里就可以直接使用所有在 user 里的数据了
    };
  },
};
</script>
