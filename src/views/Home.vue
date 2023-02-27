<template>
  <Header></Header>
  <NavSwiper></NavSwiper>
  <!-- vueuse包裹 实现按需引入 -->
  <div ref="target">
    <NewGoodCourse v-if="targetIsVisible"></NewGoodCourse>
  </div>
  <Foot></Foot>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import Header from '../components/common/header.vue';
import NavSwiper from '../components/home/NavSwiper.vue'
// import NewGoodCourse from '../components/home/NewGoodCourse.vue';
import Foot from '../components/home/Foot.vue';

const NewGoodCourse = defineAsyncComponent(() =>
  import('../components/home/NewGoodCourse.vue')
)
const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetIsVisible.value = isIntersecting
    }
  },
)
</script>

<style lang='less' scoped></style>
