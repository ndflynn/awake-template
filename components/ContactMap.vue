<template>
  <section class="hero is-medium">
    <div class="container">
      <button
        class="button is-primary is-rounded is-outlined"
        @click="returnToCenter()"
      >
        Return to Centre
      </button>
      <button
        class="button is-primary is-rounded is-outlined"
        target="_blank"
        href="https://www.google.com/maps/dir//Fridays+Cannabis,+190+Main+St+W,+Picton,+ON+K0K+2T0/@44.0069973,-77.1441603,17z/data=!4m16!1m6!3m5!1s0x89d7cb071fc5a37b:0xba36f1a6a8514f00!2sFridays+Cannabis!8m2!3d44.0069973!4d-77.1419663!4m8!1m0!1m5!1m1!1s0x89d7cb071fc5a37b:0xba36f1a6a8514f00!2m2!1d-77.1419663!2d44.0069973!3e2"
      >
        Directions
      </button>
    </div>
    <gmap-map
      ref="gMap"
      :center="{ lat: locations[0].lat, lng: locations[0].lng }"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative',
        styles: mapStyle
      }"
      :zoom="8"
    >
      <gmap-marker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{
          icon: location === currentLocation ? pins.selected : pins.notSelected
        }"
        @click="currentLocation = location"
      />
    </gmap-map>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentLocation: {},
      locationsVisibleOnMap: '',
      locations: [
        {
          lat: 44.0069313,
          lng: -77.1417338,
          name: 'Fridays Cannabis'
        }
      ],
      pins: {
        selected:
          'data:image/png;base64,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',
        notSelected:
          'data:image/png;base64,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'
      },
      mapStyle: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#585858'
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#ffffff'
            },
            {
              weight: 2
            },
            {
              gamma: 0.84
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              weight: 0.6
            },
            {
              color: '#f5f5f5'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#f5e4e4'
            },
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            },
            {
              lightness: '14'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e5e5e5'
            },
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#357374'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#c9c9c9'
            }
          ]
        }
      ]
    }
  },
  methods: {
    returnToCenter() {
      this.$refs.gMap.map.setCenter(this.locations[0])
    }
  },
  head: {
    title: 'Contact ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contact page description'
      }
    ]
  }
}
</script>
<style lang="scss" scoped>
.vue-map-container {
  height: 450px;
  width: 100%;
}
</style>
