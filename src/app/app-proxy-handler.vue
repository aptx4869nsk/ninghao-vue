<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'Hello World',
    };
  },

  created() {
    const user = {
      name: 'nsk',
    };

    const handler = {
      // get 方法有个默认的行为，就是返回对象里的某个具体的属性的值。
      // 这个方法接收一个 target 参数，还有一个 property 参数。
      // target 就是对象，property 就是要访问的对象里的某个属性的名字。
      get(target, property) {
        return target[property];
      },

      set(target, property, value) {
        if (property === 'name') {
          if (value.length > 10) {
            throw new Error('名字太长了！');
          }
        }

        return Reflect.set(target, property, value);
      },
    };

    const userProxy = new Proxy(user, handler);

    try {
      userProxy.name = 'nangsankham';
    } catch (error) {
      console.log('错误: ', error.message);
    }
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>
