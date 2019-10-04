import config from '../common/nuxt.config'

export default {
  ...config,
  mode: 'universal',
  server: {
    port: 3001
  }
}
