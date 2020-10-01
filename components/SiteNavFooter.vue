<template>
  <nav
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <site-logo v-if="$siteConfig.logo === 'logo-component'" />
          <img
            v-else
            :src="$siteConfig.logo"
            :alt="$siteConfig.siteName"
            class="logo"
          />
        </nuxt-link>
      </div>

      <div
        :class="{
          'navbar-menu': true,
          'is-active': active
        }"
      >
        <ul class="navbar-end">
          <li
            v-for="item in $siteConfig.mainMenuFooter"
            :key="item.link"
            class="navbar-item"
            @click="active = false"
          >
            <component
              :is="item.link.startsWith('http') ? 'a' : 'nuxt-link'"
              :href="item.link"
              :to="item.link"
              :target="item.target ? item.target : '_self'"
            >
              {{ item.name }}
            </component>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'SiteNavFooter',
  data() {
    return {
      active: false,
      progress: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-menu {
  .navbar-item {
    padding-left: 2rem;
    padding-right: 2rem;
    a {
      display: block;
      font-weight: 500;
      font-size: 1.8rem;
      color: $pink;
      &.nuxt-link-exact-active,
      &:hover,
      &:focus {
        color: $green-light;
      }
    }
  }
}
.navbar-item img {
  max-height: 2rem;
}
</style>
