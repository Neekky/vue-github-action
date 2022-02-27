/**  jsdoc
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const obj = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-deploy-demo' : '/'
}

module.exports = obj