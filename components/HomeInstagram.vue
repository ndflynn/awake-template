<template>
  <div class="container">
    <vue-iframe
      src="https://apps.elfsight.com/widget/5999a8ab-2d86-44f2-83d8-067472f123be"
      allow="camera *; geolocation *; microphone *; autoplay *"
      frame-id="home-instagram"
      name="home-instagram"
      width="100%"
      height="400px"
      @load="onLoad"
    />
  </div>
</template>
<script>
export default {
  name: 'HomeInstagram',
  data: () => ({
    HomeInstagram: null
  }),
  methods: {
    onLoad(frame) {
      this.HomeInstagram = frame.contentWindow
    }
  }
}
</script>
<style lang="scss" scoped>
.container,
#home-instagram {
  height: 400px;
}
.vue-iframe iframe {
  height: 400px;
}
</style>
