<template>
  <div class="custom">
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_1 }}
          </div>
        </div>
        <div class="card__content">
          <div :class="['emoji', { hidden: !isFirstEmojiActive }]">
            🌳
          </div>
        </div>
        <div class="card__action">
          <div class="status">
            <small>isActive: {{ isFirstEmojiActive }}</small>
          </div>
          <button
            @click="isFirstEmojiActive = !isFirstEmojiActive"
            :class="{ active: isFirstEmojiActive }"
          >
            请按这里
          </button>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_2 }}
          </div>
        </div>
        <div class="card__content">
          <div
            v-if="isSecondEmojiActive"
            :class="['emoji', { pulse: isSecondEmojiActive }]"
          >
            😍
          </div>
        </div>
        <div class="card__action">
          <div class="status">
            <small>isActive: {{ isSecondEmojiActive }}</small>
          </div>
          <button
            @click="isSecondEmojiActive = !isSecondEmojiActive"
            :class="{ active: isSecondEmojiActive }"
          >
            请按这里
          </button>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_3 }}
          </div>
        </div>
        <div class="card__content">
          <transition>
            <div v-if="isThirdEmojiActive" class="emoji">
              🌴
            </div>
          </transition>
        </div>
        <div class="card__action">
          <div class="status">
            <small>isActive: {{ isThirdEmojiActive }}</small>
          </div>
          <button
            @click="isThirdEmojiActive = !isThirdEmojiActive"
            :class="{ active: isThirdEmojiActive }"
          >
            请按这里
          </button>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_4 }}
          </div>
        </div>
        <div class="card__content">
          <transition name="slide">
            <div v-if="isFourdEmojiActive" class="emoji">
              😆
            </div>
          </transition>
        </div>
        <div class="card__action">
          <div class="status">
            <small>isActive: {{ isFourdEmojiActive }}</small>
          </div>
          <button
            @click="isFourdEmojiActive = !isFourdEmojiActive"
            :class="{ active: isFourdEmojiActive }"
          >
            请按这里
          </button>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_5 }}
          </div>
        </div>
        <div class="card__content">
          <transition name="pulse">
            <div v-if="isFifthEmojiActive" class="emoji">
              👋
            </div>
          </transition>
        </div>
        <div class="card__action">
          <div class="status">
            <small>isActive: {{ isFifthEmojiActive }}</small>
          </div>
          <button
            @click="isFifthEmojiActive = !isFifthEmojiActive"
            :class="{ active: isFifthEmojiActive }"
          >
            请按这里
          </button>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_6 }}
          </div>
        </div>
        <div class="card__content">
          <transition
            name="custom-classes"
            enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounce"
          >
            <div v-if="isSixthEmojiActive" class="emoji">
              👻
            </div>
          </transition>
        </div>
        <div class="card__action">
          <div class="status">
            <small>isActive: {{ isSixthEmojiActive }}</small>
          </div>
          <button
            @click="isSixthEmojiActive = !isSixthEmojiActive"
            :class="{ active: isSixthEmojiActive }"
          >
            请按这里
          </button>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_7 }}
          </div>
        </div>
        <div class="card__content">
          <transition
            name="custom-classes"
            enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounce"
            mode="out-in"
          >
            <component :is="currentEmoji"></component>
          </transition>
        </div>
        <div class="card__action">
          <div class="status">
            <small>isActive: {{ isSeventhEmojiActive }}</small>
          </div>
          <button
            @click="isSeventhEmojiActive = !isSeventhEmojiActive"
            :class="{ active: isSeventhEmojiActive }"
          >
            请按这里
          </button>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_8 }}
          </div>
        </div>
        <div class="card__content">
          <!-- <transition-group name="slide"> -->
          <transition-group
            name="custom"
            leave-active-class="animate__animated animate__tada"
          >
            <div class="emoji" v-for="emoji in emojiList" :key="emoji">
              {{ emoji }}
            </div>
          </transition-group>
        </div>
        <div class="card__action">
          <div class="status">
            <small>Used 'lodash'</small><br />
            <small>isActive: {{ isEighthEmojiActive }}</small>
          </div>
          <button @click="shuffle" :class="{ active: isEighthEmojiActive }">
            Shuffle
          </button>
          <button @click="pop">
            Pop
          </button>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="card">
        <div class="card__header">
          <h3 class="card-title">{{ name }}</h3>
          <div class="card-subtitle">
            {{ sub_title_9 }}
          </div>
        </div>
        <div class="card__content">
          <div class="emoji">{{ animatedNumber }}</div>
        </div>
        <div class="card__action">
          <div class="status">
            <small>Used 'gsap'</small><br />
            <small>isActive: {{ isNinthEmojiActive }}</small>
          </div>
          <button
            @click="number = number + 10"
            :class="{ active: isNinthEmojiActive }"
          >
            请按这里
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GhostEmoji from './components/ghost-emoji.vue';
import RobotEmoji from './components/robot-emoji.vue';
import _ from 'lodash';
import gsap from 'gsap';

export default {
  data() {
    return {
      name: '过渡动画',
      sub_title_1: '基于 Class 的过渡',
      sub_title_2: '基于 Class 的动画',
      sub_title_3: 'transition: 进入与离开过渡',
      sub_title_4: 'transition: 指定过渡效果的名字',
      sub_title_5: 'transition: 进入与离开动画',
      sub_title_6: 'transition: 自定义过渡类',
      sub_title_7: '组件之间的过渡',
      sub_title_8: '列表的过渡与动画',
      sub_title_9: '状态的过渡',
      isFirstEmojiActive: true,
      isSecondEmojiActive: false,
      isThirdEmojiActive: true,
      isFourdEmojiActive: true,
      isFifthEmojiActive: true,
      isSixthEmojiActive: true,
      emoji: 'GhostEmoji',
      isSeventhEmojiActive: true,
      emojiList: ['😘', '🥰', '🤪'],
      isEighthEmojiActive: true,
      number: 0,
      tweenedNumber: 0,
      isNinthEmojiActive: true,
    };
  },

  computed: {
    currentEmoji() {
      return this.isSeventhEmojiActive ? 'GhostEmoji' : 'RobotEmoji';
    },

    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },

  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    },
  },

  methods: {
    shuffle() {
      this.emojiList = _.shuffle(this.emojiList);
    },

    pop() {
      this.emojiList.pop();
    },
  },
  components: { GhostEmoji, RobotEmoji },
};
</script>

<style scoped>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
