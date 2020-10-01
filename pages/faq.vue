<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title=""
      subtitle=""
      image="/uploads/home-hero.jpg"
      size="small"
    ></site-hero>
    <site-hero
      title="Questions"
      subtitle="Fridays Contact Page"
      image="/uploads/contact-hero.jpg"
      size="medium"
    ></site-hero>
    <section class="section">
      <div class="container">
        <div v-for="accordion in accordions" :key="accordion.title">
          <BaseAccordian>
            <template v-slot:title>
              {{ accordion.title }}
            </template>
            <template v-slot:content>
              <div>{{ accordion.text }}</div>
            </template>
          </BaseAccordian>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BaseAccordian from '@/components/BaseAccordion'
export default {
  scrollToTop: true,
  components: {
    BaseAccordian
  },
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  data() {
    return {
      accordions: [
        {
          title: 'How do I know if your cannabis is safe to consume?',
          text:
            'Don’t you worry. Health Canada conducts several routine quality control checks under the ACMPR to ensure our cannabis is not only top quality, but also safe for consumption.'
        },
        {
          title: 'How long will my cannabis stay fresh?',
          text:
            'If you store it as above – sheltering it from light, air, moisture, and high temperatures – your cannabis should stay fresh for around 6 months.'
        },
        {
          title: 'Can I share cannabis with minors?',
          text:
            'No. Research shows that using cannabis regularly before the age of 16 can increase the risk of negative health outcomes and could also impact brain development. Distributing cannabis to a minor, can mean significant legal consequences, even for parents/guardians. The rules and penalties for distributing cannabis to minors are different than those set for alcohol distribution to minors.'
        }
      ]
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  }
}
</script>
<style scoped>
.accordion {
  display: flex;
  cursor: pointer;

  margin: 0;
}
.title {
  margin: 0;
  color: darkgreen;
}
.content {
  text-align: left;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 10px;
}
</style>
