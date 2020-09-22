<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.posts.imageDimensions ||
        $siteConfig.cards.imageDimensions ||
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
      type: String,
      default: ''
    },
    cbd: {
      type: String,
      default: ''
    },
    sale: {
      type: String,
      default: ''
    },
    best: {
      type: String,
      default: ''
    },
    new: {
      type: String,
      default: ''
    }
  }
}
</script>
