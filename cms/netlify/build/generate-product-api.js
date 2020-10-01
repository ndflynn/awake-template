import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateProductApi = () => {
  const contentDir = `${rootDir}/content/products`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/products.json`
  const metaFile = `${apiDir}/products-meta.json`
  const pages = siteConfig.products.perPage
  const doneMessage = `{totalNumber} posts generated in products API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/products`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateProductApi
