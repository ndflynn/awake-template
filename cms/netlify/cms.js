import Product from './product'
import LifeCycleHooks from './hooks/lifeCycle'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.product = new Product(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
