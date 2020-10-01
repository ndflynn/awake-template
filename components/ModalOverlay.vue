<template>
  <div
    :class="{
      modal: true,
      'is-active': active,
      'is-closing': closing
    }"
  >
    <div class="modal-background"></div>
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
      closing: false
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
.modal-card-body {
  padding: 6rem;
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
