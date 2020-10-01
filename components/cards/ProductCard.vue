<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.products.imageDimensions ||
        $siteConfig.products.imageDimensions ||
        null
    "
  >
    <h2 v-if="brand" class="brand-wrapper">
      <strong>{{ brand }}</strong>
    </h2>
    <h2 v-if="types" class="types-wrapper">
      <strong>{{ types }}</strong>
    </h2>
    <h2 v-if="thc" class="thc-wrapper">
      <strong>{{ thc }}</strong>
    </h2>
    <h2 v-if="cbd" class="cbd-wrapper">
      <strong>{{ cbd }}</strong>
    </h2>
  </generic-card>
</template>

<script>
import GenericCard from './GenericCard'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    },
    types: {
      type: String,
      default: ''
    },
    thc: {
      type: Number,
      default: null
    },
    cbd: {
      type: Number,
      default: null
    },
    sale: {
      type: Boolean,
      default: false
    },
    best: {
      type: Boolean,
      default: false
    },
    new: {
      type: Boolean,
      default: false
    }
  }
}
</script>
