<template>
  <div class="animation-container">
    <h1>Animation</h1>
    <h2>1. Slide in</h2>
    <p class="slide-in-text">
      The Caterpillar and Alice looked at each other for some time in silence: at
      last the Caterpillar took the hookah out of its mouth, and addressed her in a
      languid, sleepy voice.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AnimationPage',
};
</script>

<style scoped>

.slide-in-text { 
  animation-duration: 3s;
  animation-name: slidein;
  
  /* 无限循环 */
  animation-iteration-count: infinite;

  /* 反向播放 */
  animation-direction: alternate;
}

@keyframes slidein {
  0% {
    margin-left: 100%;
    width: 100%;
  }

  75% {
    font-size: 300%;
    margin-left: 50%;
    width: 150%;
  }

  100% {
    margin-left: 0%;
    width: 100%;
  }
}

</style>