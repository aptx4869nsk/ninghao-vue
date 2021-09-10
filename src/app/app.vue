<template>
  <h3>{{ name }}</h3>
  {{ processStatus }}
  <button v-on:click="resetName">重置</button>
  <button @click="setName">設置</button>

  <br />
  <br />

  <strong>v-for</strong>
  <div v-for="(post, index) in postList" :key="post.id">
    {{ index + 1 }} {{ post.content }} - {{ post.author }}
  </div>

  <br />
  <br />

  <strong>v-if</strong>
  <br />
  <div v-if="visible">隐藏的内容！</div>
  <button v-on:click="visible = !visible">
    {{ visible ? '隐藏' : '显示' }}
  </button>

  <br />
  <br />

  <strong>绑定Class</strong>
  <br />
  <div
    :class="['item-menu', { active: currentItem === index }]"
    @click="currentItem = index"
    v-for="(item, index) in menuItems"
    :key="index"
  >
    {{ item }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Hello World',

      postList: [
        {
          id: 1,
          content: '故人西辤黃鶴樓，烟花三月下揚州',
          author: '李白',
        },
        {
          id: 2,
          content: '好雨知时节，当春乃发生',
          author: '杜普',
        },
        {
          id: 3,
          content: '浔阳江头夜送客，枫叶荻花秋瑟瑟',
          author: '白居易',
        },
      ],

      visible: false,

      menuItems: ['首页', '热门', '发布'],
      currentItem: 0,
    };
  },

  computed: {
    processStatus() {
      return this.name === 'Hello World' ? '初始化...' : '成功設置了數據!';
    },
  },

  watch: {
    name(newName, oldName) {
      console.log(`name 發生了變化：${oldName} -> ${newName}`);
    },
  },

  created() {
    console.log('App 組件已創建!');

    this.setName();
  },

  methods: {
    setName() {
      setTimeout(() => {
        this.name = '歡迎世界';
      }, 3000);
    },

    resetName() {
      this.name = 'Hello World';
    },
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>
