<template>
  <footer class="site-footer">
    <section class="hero is-medium">
      <img
        class="footer-bg-img"
        :src="responsiveImage.src"
        :lazy="false"
        :srcset="responsiveImage.srcSet"
      />
      <div class="hero-body">
        <div class="container">
          {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All
          Rights Reserved
          <br />
          Made with <span style="color: #e25555;">&#9829;</span> with Nuxt.js
          and Netlify
          <div class="columns">
            <div class="column">
              <h1 class="title">
                Contact us
              </h1>
              <div class="columns is-mobile">
                <div class="column">
                  <p class="bd-notification is-info">
                    First nested column
                  </p>
                </div>
                <div class="column">
                  <p class="bd-notification is-info">
                    Second nested column
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <h1 class="title">
                Stay in touch
              </h1>
              <div class="columns is-mobile">
                <div class="column is-half">
                  <p class="bd-notification is-danger">
                    50%
                  </p>
                </div>
                <div class="column">
                  <p class="bd-notification is-danger">
                    Auto
                  </p>
                </div>
                <div class="column">
                  <p class="bd-notification is-danger">
                    Auto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    image: { type: String, default: '' }
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
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  .hero {
    background-size: cover !important;
    background-position: center bottom;
    text-align: left;
    overflow: hidden;
    position: relative;
    .footer-bg-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
