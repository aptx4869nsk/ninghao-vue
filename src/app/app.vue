<template>
  <h3 @click="changeName">{{ nameEmoji }}</h3>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue';

export default {
  // 组合式接口：提供组件方法
  setup() {
    const name = ref('宁皓网');

    const changeName = () => {
      name.value = 'NINGHAO';
    };

    // 组合式接口：生命周期方法
    onMounted(() => {
      console.log('mounted');
    });

    // 组合式接口：监视数据 watch
    watch(name, (newName, oldName) => {
      console.log(newName, oldName);
    });

    // 计算属性
    const nameEmoji = computed(() => `${name.value} 😃`);

    return {
      name,
      changeName,
      nameEmoji,
    };
  },
};
</script>
