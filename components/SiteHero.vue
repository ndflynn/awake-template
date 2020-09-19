<template>
  <section :class="`hero is-${computedSize} hero-theme-${computedTheme}`">
    <img
      class="hero-bg-img"
      :src="responsiveImage.src"
      :lazy="false"
      :srcset="responsiveImage.srcSet"
    />
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <site-nav />
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <h1 class="title animated fadeIn is-spaced">
              {{ title }}
            </h1>
            <h2 class="subtitle animated fadeIn mt-2">
              {{ subtitle }}
            </h2>
            <br />
            <div v-if="$slots.default" class="under-subtitle animated fadeIn">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SiteHero',
  props: {
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' },
    theme: { type: String, default: '' },
    size: { type: String, default: '' }
  },
  computed: {
    responsiveImage() {
      if (this.image.indexOf('/uploads') === 0) {
        return require(`~/assets${this.image}`)
      }
      return { src: this.image, srcSet: '' }
    },
    computedTheme() {
      if (this.theme === '' && this.$siteConfig.hero.theme) {
        return this.$siteConfig.hero.theme
      }
      return this.theme || 'mist'
    },
    computedSize() {
      return this.size || 'large'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  margin-top: 0;
  background-size: cover !important;
  background-position: center;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.title {
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 40px;
  }
}
.subtitle,
.under-subtitle {
  padding: 0;
  margin: 0;
}
.subtitle {
  font-size: 1.8rem;
  margin-bottom: 0 !important;
}
.under-subtitle {
  display: inline-block;
  font-size: 0.8rem;
  border-top: 2px solid $primary;
  padding-top: 30px;
}
.opti-image {
  opacity: 0;
}
.opti-image-loaded {
  opacity: 0.12;
  animation: blurIn 4.5s ease;
}
</style>
<style lang="scss">
.hero {
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
  .opti-image {
    opacity: 0;
  }
  .opti-image-loaded {
    opacity: 1;
  }
}
.hero-body {
  min-height: 18rem;
}
.hero.is-medium .hero-body {
  padding-top: 27rem;
  padding-bottom: 9rem;
}
.hero-theme-mist {
  .hero-bg-img {
    filter: grayscale(1);
  }
  .opti-image-loaded {
    opacity: 0.12;
    animation: blurInGrayscale 4.5s ease;
  }
}
.hero-theme-dark,
.hero-theme-light {
  &.hero:after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
  .hero-body {
    position: relative;
    z-index: 2;
  }
}
.hero-theme-dark {
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    color: $pink-lighter;
  }
}
.hero-theme-light.hero {
  &:after {
    background: rgba(255, 255, 255, 0.6);
  }
  .title,
  .subtitle,
  .under-subtitle,
  .under-subtitle strong {
    text-shadow: 1px 1px 2px white;
  }
}
</style>
