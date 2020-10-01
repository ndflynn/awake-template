import generateProductApi from '../build/generate-product-api'
import copyStaticToDist from '../build/copy-static-to-dist'

export default () => {
  generateProductApi()
  copyStaticToDist()
}
