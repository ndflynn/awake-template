<template>
  <div
    :class="{
      modal: true,
      'is-active': active,
      'is-closing': closing
    }"
  >
    <div class="modal-background">
      <img
        class="hero-bg-img"
        :src="responsiveImage.src"
        :lazy="false"
        :srcset="responsiveImage.srcSet"
      />
    </div>
    <div class="modal-card">
      <section class="modal-card-body">
        <slot></slot>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
    triggerText: { type: String, default: '' },
    confirmText: { type: String, default: 'Save' },
    footer: { type: Boolean, default: false },
    id: { type: String, required: true }
  },
  data() {
    return {
      active: false,
      closing: false,
      image: '/uploads/home-hero.jpg'
    }
  },
  computed: {
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    }
  },
  created() {
    this.$eventBus.$on(`modal-triggered`, (id) => {
      if (id === this.id) this.active = true
    })
  },
  methods: {
    close() {
      this.closing = true
      setTimeout(() => {
        this.active = false
        this.closing = false
      }, 300)
    }
  }
}
</script>
<style lang="scss" scoped>
.hero-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.modal-card-body {
  background-color: transparent;
}
.modal {
  &.is-active {
    .modal-card {
      animation: fadeIn 0.3s ease;
    }
    .modal-background {
      animation: fadeIn 0.6s ease;
    }
  }
  &.is-closing {
    .modal-card {
      animation: fadeOutUp 0.3s ease;
    }
    .modal-background {
      animation: fadeOut 0.3s ease;
    }
  }
}
</style>
