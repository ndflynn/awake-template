<template>
  <div class="wrapper">
    <div class="accordion" @click="toggleItem">
      <div class="question">
        <slot name="title"></slot>
      </div>
    </div>
    <div v-show="show" class="content">
      <div><slot name="content"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleItem() {
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  padding: 10px 0 0;
  border-bottom: 1px solid black;
}
.question {
  font-weight: 500;
  padding: 0 0 10px;
}
.accordion {
  display: flex;
  cursor: pointer;
  margin: 0;
  &:hover {
    p {
      text-decoration: underline;
    }
  }
}
.title {
  margin: 0;
}
.content {
  text-align: left;
  width: 100%;
  padding: 0 0 10px;
  p {
    font-size: 1.6rem;
  }
}
</style>
