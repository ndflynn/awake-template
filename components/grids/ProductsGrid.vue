<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.product"
    :theme="$siteConfig.products.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <product-card
        :title="item.title"
        :image="item.image"
        :link="item.slug ? `${item.slug}` : ''"
        :brand="item.brand"
        :types="item.types"
        :thc="item.thc"
        :cbd="item.cbd"
        :sale="item.sale"
        :best="item.best"
        :new="item.new"
      />
    </template>
  </resource-grid>
</template>

<script>
import ProductCard from '~/components/cards/ProductCard'
export default {
  name: 'ProductsGrid',
  components: { ProductCard },
  props: {
    perRow: { type: Number, default: 4 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    category: {
      type: Array,
      default() {
        return []
      }
    },
    exclude: { type: String, default: '' }
  }
}
</script>
