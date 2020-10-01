/**
 * CMS Configuration
 * Alter 'netlify' in the import statment below to one of the following:
 * netlify
 */
import theCMS from '../cms/netlify/cms'

/**
 * General Site configurations
 */
export default {
  siteName: 'Fridays Cannabis',
  tagline: 'A Nuxt.js Theme for Netlify CMS',
  featureImage: '/uploads/home-hero.jpg',
  logo: 'logo-component', // 'logo-component', // or '/logo.svg' for regular image
  googleAnalytics: {
    on: true,
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  googleMaps: {
    on: true
  },
  mainMenu: [
    {
      name: 'SHOP NOW',
      link: 'https://menu.fridayscannabis.com'
    },
    {
      name: 'FAQ',
      link: '/faq'
    },
    {
      name: 'CONTACT',
      link: '/contact'
    }
  ],

  mainMenuFooter: [
    {
      name: 'HOME',
      link: '/'
    },
    {
      name: 'SHOP NOW',
      link: 'https://menu.fridayscannabis.com'
    },
    {
      name: 'FAQ',
      link: '/faq'
    },
    {
      name: 'CONTACT',
      link: '/contact'
    }
  ],

  hero: {
    theme: 'dark' // options: mist, light, dark
  },

  // Main Layout/Style
  layout: {
    width: 'contained', // Options: contained, full
    theme: 'one-column' // Options: one-column, sidebar-right, sidebar-left
  },

  // Card Layout
  cards: {
    imageDimensions: '1x1', // Options: 1x1, 5x4, 4x3, 3x2, 5x3, 16x9, 2x1, 3x1, 4x5, 3x4, 2x3, 3x5, 9x16
    theme: 'boxes' // Options: boxes, grid, image-grid
  },

  // Disqus
  disqus: {
    on: true,
    loadingStrategy: 'button', // Options: onload, lazy, button
    siteShortName: 'blog-danielkelly-io' // 'blog-danielkelly-io'
  },

  // Newsletter Subscribe
  newsletter: {
    on: true,
    heading: 'Subscribe to Our Newsletter',
    btnText: 'Subscribe',
    // Can be the form action on a mail chimp form, a hubspot form,
    // or any other url you want to post the form data to
    mailchimp: {
      on: true,
      formAction:
        'https://fridayscannabis.us18.list-manage.com/subscribe/post?u=ec54bddd5b0ad3e2f3adb033f&amp;id=46d239de71'
    },
    custom: {
      on: false,
      formAction: ''
    }
  },

  // Posts
  products: {
    on: true,
    theme: null, // See card.theme (can be unique for posts if set here)
    imageDimensions: null, // See card.imageDimensions (can be unique for posts if set here)
    perRow: 5,
    perPage: 6
  }
}

export const CMS = theCMS
