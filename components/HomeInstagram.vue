<template>
  <div class="container">
    <iframe
      v-resize="{ log: false }"
      width="100%"
      src="https://apps.elfsight.com/widget/5999a8ab-2d86-44f2-83d8-067472f123be"
      frameborder="0"
      frame-id="home-instagram"
      name="home-instagram"
    />
  </div>
</template>
<script>
import iframeResize from 'iframe-resizer/js/iframeResizer'
export default {
  name: 'HomeInstagram',
  directives: {
    resize: {
      bind: (el, { value = {} }) => {
        el.addEventListener('load', () => iframeResize(value, el))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container,
.vue-iframe,
.vue-iframe iframe,
iframe#home-instagram {
  width: 100%;
}
</style>
