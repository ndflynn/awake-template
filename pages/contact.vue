<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title=""
      subtitle=""
      image="/uploads/home-hero.jpg"
      size="small"
    ></site-hero>
    <site-hero
      title="Contact Us"
      subtitle="Fridays Contact Page"
      image="/uploads/contact-hero.jpg"
      size="medium"
    ></site-hero>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <contact-form />
          </div>
          <div class="column">
            <h1 class="title">
              Join Fridays’ mailing list!
            </h1>
            <p>
              Be the first to know about new product arrivals, educational
              events and promotional offers.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero has-background-light">
      <contact-map />
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ContactForm from '~/components/ContactForm'
import ContactMap from '~/components/ContactMap'
export default {
  scrollToTop: true,
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm, ContactMap },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  }
}
</script>
