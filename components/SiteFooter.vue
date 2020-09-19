<template>
  <footer class="site-footer">
    <section class="hero is-small">
      <img
        class="footer-bg-img"
        :src="responsiveImage.src"
        :lazy="false"
        :srcset="responsiveImage.srcSet"
      />
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <site-logo />
            </div>
            <div class="column has-text-right">
              <p>
                <NuxtLink to="/">
                  Home
                </NuxtLink>
                <NuxtLink to="/shop">
                  Shop Now
                </NuxtLink>
                <NuxtLink to="/faq">
                  FAQ
                </NuxtLink>
                <NuxtLink to="/contact">
                  Contact
                </NuxtLink>
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h3 class="title">
                Contact us
              </h3>
              <div class="columns">
                <div class="column">
                  <p>
                    hello@fridayscannabis.com<br />
                    (XXX) XXX.XXXX
                  </p>
                  <p>
                    FRIDAYS Cannabis<br />
                    190 Main St W<br />
                    Picton, ON K0K 2T0<br />
                    Canada
                  </p>
                </div>
                <div class="column">
                  <p>
                    Mon-Sat: 9am-9pm<br />
                    Sun: 9am-7pm
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <h3 class="title">
                Stay in touch
              </h3>
              <div class="columns">
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
          <div class="column has-text-right">
            <span class="icon has-text-info">
              <font-awesome-icon
                icon="envelope"
                class="search-icon"
                @click="toggleSearchBar()"
              />
              <span class="icon is-large is-right">
                <font-awesome-icon icon="envelope" />
                <i class="fas fa-envelope"></i>
              </span>
            </span>
          </div>
          <hr />
          <div class="columns is-size-6">
            <div class="column">
              <p class="mt-0">
                {{ new Date().getFullYear() }} &copy; {{ $siteConfig.siteName }}
              </p>
            </div>
            <div class="column has-text-right">
              <p class="mt-0">
                Back to top
              </p>
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
    color: $pink-lighter;
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
h3.title {
  font-size: 3.6rem;
  font-weight: 400;
  color: $pink-lighter;
  margin-bottom: 0;
}
a {
  color: $pink-lighter;
  font-weight: 500;
  font-size: 2rem;
  padding-right: 36px;
  &.nuxt-link-exact-active,
  &:hover,
  &:focus {
    color: $green-light;
  }
}
</style>
