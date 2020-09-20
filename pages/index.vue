<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="Apothecary style cannabis store in Picton, Prince Edward County."
      subtitle="Subheadline 1 Quiam lam ut maiore, nobis aliciaturit is et essi voloria"
      image="/uploads/home-hero.jpg"
      size="medium"
    >
      <nuxt-link
        class="button is-info is-rounded is-outlined is-large"
        to="/shop"
      >
        VIEW MENU
      </nuxt-link>
      <button
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'agegate-modal')"
      >
        TEST
      </button>
    </site-hero>
    <section class="section is-medium">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-four-fifths">
            <h2 class="title">
              About us
            </h2>
            <p>
              Fridays is a boutique cannabis retail store located in the
              picturesque Prince Edward County. We are locally owned and
              operated, but aim to offer a world-class dispensary experience for
              the local and visitor alike. Our high end products have been
              locally sourced wherever possible and curated for the discerning
              consumer. Just as Fridays hold the potential for the weekend
              ahead, we believe cannabis has the potential to transform and
              inspire. From the novice user to the cannabis connoisseur, the
              staff at Fridays are here to answer your questions, walk you
              through our products, and help bring you the possibility of
              Friday, every day of the week.
            </p>
            <div class="columns is-centered">
              <div class="column">
                <div class="field is-grouped is-grouped-centered">
                  <p class="control">
                    <nuxt-link
                      class="button is-rounded is-outlined button-about is-large"
                      to="/shop"
                    >
                      Order online<br />&amp; pick up in store
                    </nuxt-link>
                  </p>
                  <p>
                    <nuxt-link
                      class="button is-rounded is-outlined button-about is-large"
                      to="/contact"
                    >
                      Come visit us
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </div>
            <p>
              With COVID-19 still impacting the community it is our utmost
              priority and responsibility to keep everyone safe while ensuring
              we follow ‘COVID-19 Best Practices.’ at our cannabis dispensary.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-light">
      <h2 class="title">Best-sellers /<br />Recommended products</h2>
    </section>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <posts-grid />
      </template>
    </main-section>
    <section class="section has-background-light py-0">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column py-0">
            <figure class="image is-1by1 ">
              <opti-image
                :src="require('~/assets/uploads/home-newsletter.jpg').src"
                :srcset="require('~/assets/uploads/home-newsletter.jpg').srcSet"
              />
            </figure>
          </div>
          <div class="column py-0">
            <h2 class="title">
              Join Fridays’ mailing list!
            </h2>
            <p>
              Be the first to know about new product arrivals, educational
              events and promotional offers.
            </p>
            <form
              target="_blank"
              method="post"
              :action="formAction"
              @submit="$emit('submit', email)"
            >
              <div class="field is-grouped">
                <p class="control is-expanded">
                  <input
                    v-model="email"
                    class="input is-rounded is-outlined is-large"
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email"
                  />
                </p>
                <div class="control">
                  <button
                    type="submit"
                    class="button is-rounded is-outlined is-large"
                  >
                    {{ $siteConfig.newsletter.btnText || 'Subscribe' }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <agegate-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import AgegateFormModal from '~/components/AgegateFormModal'
export default {
  name: 'HomePage',
  scrollToTop: true,
  components: {
    AgegateFormModal
  },
  data() {
    return {
      email: ''
    }
  },
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage']),
    formAction() {
      if (this.$siteConfig.newsletter.mailchimp.on) {
        return this.$siteConfig.newsletter.mailchimp.formAction
      }
      return this.$siteConfig.newsletter.custom.formAction
    }
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page {
  text-align: center;
}
</style>
