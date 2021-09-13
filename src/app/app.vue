<template>
  <h2>{{ header_1 }}</h2>
  <h3>{{ title_1 }}</h3>
  <input type="text" v-model="textContent" />
  <span>Content ➡️ {{ textContent }}</span>
  <h3>{{ title_2 }}</h3>
  <textarea v-model="textAreaContent" placeholder="写点东西"></textarea>
  <span>Content ➡️ {{ textAreaContent }}</span>
  <h3>{{ title_3 }}</h3>
  <input id="checked" type="checkbox" v-model="checked" />
  <label for="checked">➡️ Checked: {{ checked }}</label>
  <h3>{{ title_4 }}</h3>
  <label for="tag-1">
    <input type="checkbox" id="tag-1" value="阅读" v-model="tags" />
    阅读
  </label>
  <label for="tag-2">
    <input type="checkbox" id="tag-2" value="听力" v-model="tags" />
    听力
  </label>
  <label for="tag-3">
    <input type="checkbox" id="tag-3" value="语法" v-model="tags" />
    语法
  </label>
  <span> ➡️ Tags {{ tags }}</span>
  <h3>{{ title_5 }}</h3>
  <label for="subscription-annual">
    <input
      type="radio"
      id="subscription-annual"
      value="annual"
      v-model="subscription"
    />
    年度
  </label>
  <label for="subscription-quarterly">
    <input
      type="radio"
      id="subscription-quarterly"
      value="quarterly"
      v-model="subscription"
    />
    季度
  </label>
  <span> ➡️ Subscription: {{ subscription }}</span>
  <h3>{{ title_6 }}</h3>
  <select v-model="category">
    <option value="">选择分类</option>
    <option value="development">应用开发</option>
    <option value="game">游戏开发</option>
  </select>
  <span>➡️ Category: {{ category }}</span>

  <h2>{{ header_2 }}</h2>
  <h3>{{ title_7 }}</h3>
  <input type="text" @input="onInputContent" />
  <h3>{{ title_8 }}</h3>
  <input type="text" @change="onChangeContent" />
  <h3>{{ title_9 }}</h3>
  <input type="text" @keyup.enter="onKeyupInput" />

  <h2>{{ header_3 }}</h2>
  <h3>{{ title_10 }}</h3>
  <input type="text" :value="content" @input="content = $event.target.value" />
  <span>➡️ {{ content }}</span>
  <h3>{{ title_11 }}</h3>
  <input type="text" v-model.lazy="contentLazy" />
  <span> ➡️ Content: {{ contentLazy }}</span>
  <br />
  <span style="color: red; font-size: 12px;"
    >跟 @change 像， v-model 默认做的是 @input。 @input 就是及时更新content,
    @change 就是点击Enter的时候才更改了Content。</span
  >
  <h3>{{ title_12 }}</h3>
  <input
    type="text"
    v-model.number="contentNumber"
    @change="onChangeContentNumber"
  />
  <span> ➡️ Content: {{ contentNumber }}</span>
  <br />
  <span style="color: red; font-size: 12px;">
    v-model.number
    监控文本框里的是否是数字，数字就显示number,文字则显示string。可以在console那里看一下！
  </span>
  <h3>{{ title_13 }}</h3>
  <input type="text" v-model.trim="contentTrim" @change="onChangeContentTrim" />
  <span> ➡️ Content: {{ contentTrim }}</span>
  <br />
  <span style="color: red; font-size: 12px;">
    在 v-model 上使用 trim 这个修饰符可以去掉数据前后多余的空白
  </span>
</template>

<script>
export default {
  data() {
    return {
      header_1: '变淡元素',
      title_1: '文本框 Text',
      textContent: '天地玄黄',
      title_2: '多行文本 Textarea',
      textAreaContent: '',
      title_3: '复选框 Checkbox',
      checked: true,
      title_4: '多值复选框 Checkbox',
      tags: [],
      title_5: '单选按钮 Radio',
      subscription: '',
      title_6: '选择列表 Select',
      category: '',
      header_2: '事件',
      title_7: 'input事件：元素值变化是发生的事件',
      title_8: 'change事件：用户提交修改元素值时发生的事件',
      title_9: 'keyup事件：按下并天气键盘时发生的事件',
      header_3: 'v-model',
      title_10: '理解在表单元素上用的v-model指令',
      content: '测试',
      title_11: 'v-model的修饰符: .lazy',
      contentLazy: 'Lazy Guy',
      title_12: 'v-model的修饰符: .number',
      contentNumber: 0,
      title_13: 'v-model的修饰符: .trim',
      contentTrim: '   @人外有人@  ',
    };
  },

  created() {
    console.log(
      'content 数据的类型（组件创建时 created)：',
      typeof this.contentNumber,
    );
  },

  methods: {
    onInputContent(event) {
      console.log(event);
    },
    onChangeContent(event) {
      console.log(event.target.value);
    },
    onKeyupInput() {
      // you can directly use @keyup.enter in input tag 😃
      // if (event.key == 'Enter') {
      //   console.log('回车!');
      // }
      console.log('回车！');
    },
    onChangeContentNumber() {
      console.log(
        'content 数据的类型（元素变化后 @change)：',
        typeof this.contentNumber,
      );
    },
    onChangeContentTrim() {
      console.log(this.contentTrim, this.contentTrim.length);
    },
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>
