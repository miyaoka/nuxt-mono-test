<template>
  <div>
    <div class="text">{{ text }}</div>
    <img :src="commonImg" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    commonImg() {
      return require('~~~/assets/img/food_gohan.png')
    }
  }
}
</script>
