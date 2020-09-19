<template>
  <modal-overlay
    id="agegate-modal"
    trigger-text="Subscribe To Newsletter"
    class="agegate-modal"
  >
    <agegate-form />
  </modal-overlay>
</template>
<script>
import ModalOverlay from '~/components/ModalOverlay'
import AgegateForm from '~/components/AgegateForm'
export default {
  components: { ModalOverlay, AgegateForm }
}
</script>

<style lang="scss">
.AgegateForm-modal {
  .field.has-addons {
    justify-content: center;
  }
}
</style>
