import { getMixins } from './mixins'

class Product {
  constructor(axios) {
    this.slug = 'product'
    this.slugPlural = 'products'
    this.pretty = 'Product'
    this.plural = 'Products'
    this.axios = axios
    this.editUrl = '/admin/#/collections/product/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Product.prototype, getMixins)

export default Product
