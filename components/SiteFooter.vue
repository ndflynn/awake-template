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
              <site-nav-footer />
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
            </span>
            <div class="icon is-large is-right">
              <img
                width="32"
                height="32"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NGQ1MDg5My03MTNiLTQ4MjctODQ1Mi04MWI1ZmY2NGI3NDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkEyODJFMTVGNzYzMTFFQUFCNDFBMTZCRTFDNjNCMDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkEyODJFMTRGNzYzMTFFQUFCNDFBMTZCRTFDNjNCMDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozYTg5Y2Q5ZS1jNTI4LTQ4YmEtOTVmZC1jZDU2ZjE1OGVkNTkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2YTAwMDRkMC03NWMzLTBiNDgtOTI5MC03MzZjYjk5NGRiZTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz52tLtFAAAGsklEQVR42uxba2xURRSeu9tCmxbFttTaWkCoxADRqNSiJYJRqlgf8RH1h48ExOJbMRFNjNEUDBrxgZIUNaZKTHzFB0ZBG7VRUUSbiBirxlhftKWAbdMHlLa7nmO/Nddh5u69c/furul+yRfozN27M9+dc+acM3etaDQqxjNCYpwjI0BGgIwA4xtZuo7+/R1ieGhQWJYV7x75xGOIM4jziBGpf4Q4nTjb49gGiNvxeUt6aL3Ej3DNb/FuxDvdpKIykTUhx70Aw0MDYmigT1gh7SKZSbyJuJg4DUIkekXVOvT1Ew8QdxBfJL7Jw1YKEImI/IISbyvAskL/TF4hQBnxTuJS4lEpXL35YC24jfgk8bUgfcCVxGbiXSmevArVxFeJzxCnBCHA9cSXiBVp7teWwxxciZDl8qZXETfGEexPYhucU1AYJZYTFxCPdxh/NURYDD/hSwD+wgc1k+dEYgvxBeJnxC547aCRR5xDrCGugF9SiXAb8WG/JnA7cZaivYN4PhwQ2157kiYf2yLZ+68mVhIbNNfdgx3KWIDjYPsydhMvIm5NA5vnB3EjcYOibzLxDj8C3EI8UtG+jPh1CiY7iXg38VOwjhhGHy/3DzXOe5qJAAVwIjLY5ptSFLU2wqYXgA3Y9vIRga4hDinihfNMBJgME5DxrCLcTQbOIV6iaOeAbD7+/zFxl+KauSa7wAnEbMVW93kCJnMsvjsqPYy9CHFVmCrlBHbYx/kWchLZl01UrA5HASrxITt+JfYYTjq2f3M0WaURYDdM7HVii9TPXr8PfkBOtv6y/f0jcgK7KKcgcu30IsAhRVuTSsU4mABnys7r6DjXFhJPJK6CQ7uV2Iq+VoiySPoMx/5f2v7ehpVUas/tdGbrNRfwen0Jnug6F5OXcTbxE2ScAsJfTXwcdv4tnF6dnMc5mIpxKGwCtsP1xNN93KOI+BSc3HKYyEqYZlSzSoUmYo0mUwBefq+gSKLDHth0CMtzpubJcf81xO+Ij9hWgxdk6+bqJIDpVpeFrFE3+WbkDvxvt02Ak4nnEm9ADCLjIeIPxM2GD6QCUaNrmzZduuzwFiraebL3w7YbsaP0or0XgtwLEVSBVhgiFCey/BcvEvSKMkzSUkz+UmK9i5XFIfYS4iZF3xwkZyaIehVg1OBLFmkqRevwhL3k/bxt/qHo4+wzN1HOKpFFTF6ilynaOTxda3C/Tmxxw4qw9tR0FKBM4zeeN1xNjPfh+GShl6SjACGFo2lHMGOKCGL7wLbvRAqgCjYGfeQOMex169BSLYDu/uEE1AECHWCQiPiwf3si878QIKSoH7BjPMnnfc/SZJhpJwDbepvUluvTYxejhiCjNR0F6Ma2JaMOBQmTuKJeEfru03xPWviANzQh9WMK84iHWiRGMr4g/p4MAUy8NxcpVEdjnBw9J9QnOCpciABK5VQ3JMsJfmVwP87Tbxb/rdHFcK0YOz67WBxea4yBC58NSHkLFf1NPpZ/yOse22n4RRy6rkECJGM6IjsubryD7whjq+Syd5VDusvFzqWGY+KjtC6vAvgJQJ5GXl+j6Z8rHGr1CnDpaxVCaxN0qYohQQZCPODLxdipjV/8JMZK6W/7zFTDiRDAy+lvH7bAFTr1XWaDCzUJkdMYo74cg0PfVIPdgV+sqIRfaHExOF49fCZwAYIor76IT51yFHOxvNr5AAZrSdsZh6EHPA6Ky9n3ER9AzaAGO0FEGsv3YqwktstHxneaOLyc16/LKZwE+AAi5Eux/Ww8SRPw8owdbQeFIkVbs2ZrdjQBzuUPSm15iazGBIBCTfTYb+IDONzcrmjn87opaSoAl+TLFe2bTQRg+9ykydBWCw/nb0lCFQSQ0eJksvG2QU5uVO8D8DJbn0aTn4exquy/HuZsJAA7rUc1+z+r/Z5Qv0aTLPCJMx/E8MtapYp+drZbnG5g6X4z1NPxixga/Pdl6UbidQ73eRd21oOEJ0jwgOYjlF6GfV8XT/CWuJNfli4oqxDZOXnG8T6/b8dvZp7hkLvH3uyOxetB+IgoBCiJc10EznpnvBu6FaATaezLYuxw0wmlKfYHHIKvRP0hoRWhfRCBT3D3p+k2yIcwZ7qdvEkyxJHhWsT2T+iiqxSA45UrEGJ/4+WDWifY3f5zvF+MMGbAJPjlhmrE4BGbHbKXTsRJbjtiecv24HagSLIVW7U2U2UnWFg+S+kEtQKMHDooIqMjbn4zFMMRmGzUJkCxMH+hIQaeeJskAP+7x7XnpDlmT8ylhxl2L8B4QeZ3gxkBMgKMb/wtwADiEX7TP1xn5AAAAABJRU5ErkJggg=="
              />
            </div>
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
import SiteNavFooter from '~/components/SiteNavFooter'
export default {
  name: 'SiteFooter',
  components: {
    SiteNavFooter
  },
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
