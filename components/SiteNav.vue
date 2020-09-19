<template>
  <nav
    class="navbar is-transparent is-fixed-top"
    :class="{ isSolid: scrollDown }"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div
        :class="{
          'navbar-menu': true,
          'is-active': active
        }"
      >
        <ul class="navbar-start">
          <li
            v-for="item in $siteConfig.mainMenuStart"
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
        <hamburger-button @click="active = !active" />
      </div>

      <div
        :class="{
          'navbar-menu': true,
          'is-active': active
        }"
      >
        <ul class="navbar-end">
          <li
            v-for="item in $siteConfig.mainMenu"
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
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { HamburgerButton },
  data() {
    return {
      active: false,
      progress: 0,
      scrollDown: false
    }
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      requestAnimationFrame(() => {
        const scrollPos = window.scrollY
        if (scrollPos >= 80) {
          this.scrollDown = true
        } else {
          this.scrollDown = false
        }
        this.progress = scrollPos
      })
    })
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
      font-weight: 600;
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
.navbar-burger {
  height: auto;
}

.hero .navbar.isSolid {
  background: $light;
  min-height: 8.4rem;
  > .container {
    min-height: 8.4rem;
  }
  .navbar-brand {
    min-height: 8.4rem;
  }
}
@media screen and (min-width: 1024px) {
  .navbar-start,
  .navbar-end {
    min-width: 220px;
  }
}
</style>
