<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title=""
      subtitle=""
      image="/uploads/home-hero.jpg"
      size="small"
    ></site-hero>
    <div class="container">
      <figure class="image is-1344x900">
        <opti-image
          :src="require('~/assets/uploads/shop-dutchie.jpg').src"
          :srcset="require('~/assets/uploads/shop-dutchie.jpg').srcSet"
        />
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
