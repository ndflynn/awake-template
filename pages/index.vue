<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="Apothecary style cannabis store in Picton, Prince Edward County."
      subtitle="Subheadline 1 Quiam lam ut maiore, nobis aliciaturit is et essi voloria"
      image="/uploads/contact-hero.jpg"
    >
      <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary is-rounded is-outlined"
        nuxt
        to="/contact"
      >
        VIEW MENU
      </button>
    </site-hero>
    <section class="section">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-two-thirds">
            <h1 class="title">
              About us
            </h1>
            <p>
              A simple container to divide your page into
              <strong>sections</strong>, like the one you're currently reading
            </p>
            <div class="columns is-centered">
              <div class="column">
                <button
                  v-if="$siteConfig.newsletter.on"
                  class="button is-primary is-rounded is-outlined is-centered"
                  @click="
                    $eventBus.$emit('modal-triggered', 'newsletter-modal')
                  "
                >
                  Order online &amp; pick up in store
                </button>
              </div>
              <div class="column">
                <button
                  v-if="$siteConfig.newsletter.on"
                  class="button is-primary is-rounded is-outlined"
                  @click="
                    $eventBus.$emit('modal-triggered', 'newsletter-modal')
                  "
                >
                  Come visit us
                </button>
              </div>
            </div>
            <p>
              A simple container to divide your page into
              <strong>sections</strong>, like the one you're currently reading
            </p>
          </div>
        </div>
      </div>
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
                :src="require('~/assets/uploads/contact-person.jpg').src"
                :srcset="require('~/assets/uploads/contact-person.jpg').srcSet"
              />
            </figure>
          </div>
          <div class="column py-0">
            <h1 class="title">
              Join Fridays’ mailing list!
            </h1>
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
              <div class="field has-addons is-fullwidth">
                <p class="control">
                  <input
                    v-model="email"
                    class="input is-rounded"
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email"
                  />
                </p>
                <div class="control">
                  <button type="submit" class="button is-primary is-rounded">
                    {{ $siteConfig.newsletter.btnText || 'Subscribe' }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
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
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
