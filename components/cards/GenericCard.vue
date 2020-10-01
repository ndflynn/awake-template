<template>
  <div class="card">
    <div class="card-image">
      <component
        :is="link.startsWith('http') ? 'a' : 'nuxt-link'"
        :href="fullSlug"
        :to="link"
      >
        <figure :class="`image is-${imageRatioClass}`">
          <opti-image
            v-if="image"
            :src="responsiveImage.src"
            :srcset="responsiveImage.srcSet"
            :width="imageRatio[0]"
            :height="imageRatio[1]"
            :sizes="`(min-width: 768px) ${100 / $siteConfig.products.perRow}vw`"
          />
          <loading-spinner position="absolute" />
        </figure>
      </component>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <a :href="link">
            <h3
              :class="
                `title
                is-5
                has-text-weight-light
                ${title ? '' : 'empty-content-placeholder'}`
              "
            >
              {{ title }}
            </h3>
            <div
              :class="{
                subtitle: true,
                'is-6': true,
                'empty-content-placeholder': !$slots.default
              }"
            >
              <slot></slot>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const imageDimensionDefault = '4x3'
export default {
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    brandSlug: { type: String, default: '' },

    imageDimensions: { type: String, default: imageDimensionDefault }
  },
  computed: {
    fullSlug() {
      const fullSlug =
        'https://menu.fridayscannabis.com/products/' +
        this.brandSlug +
        '-' +
        this.link
      return fullSlug
    },
    imageRatioClass() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions.toLowerCase().replace('x', 'by')
    },
    imageRatio() {
      const imageDimensions = this.imageDimensions || imageDimensionDefault
      return imageDimensions
        .toLowerCase()
        .split('x')
        .map((size) => {
          return size * 2000
        })
    },
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    }
  }
}
</script>
<style scoped lang="scss">
.subtitle {
  opacity: 0.5;
  font-size: 0.8rem;
}
.empty-content-placeholder {
  background: transparent;
  color: transparent;
  position: relative;
  height: 1em;
  &:before {
    transform-origin: left;
    content: '';
    background: #fff;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    animation: fillHorizontal 2s linear infinite;
  }
  &.subtitle {
    width: 70%;
  }
}
</style>
<style lang="scss">
.opti-image-loaded + .spinner-wrapper {
  display: none;
}
.card img {
  transition: 0.8s ease-in-out all;
  &:hover {
    transform: opacity(0.9);
  }
}
</style>
