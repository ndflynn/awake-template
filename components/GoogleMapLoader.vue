<template>
  <div>
    <div ref="googleMap" class="google-map"></div>
    <template v-if="Boolean(google) && Boolean(map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  name: 'GoogleMapLoader',
  props: {
    mapConfig: { type: Object, default: () => {} },
    apiKey: { type: String, default: '' }
  },
  data() {
    return {
      google: null,
      map: null
    }
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    }
  }
}
</script>
<style lang="scss" scoped>
.google-map {
  height: 400px;
}
</style>
