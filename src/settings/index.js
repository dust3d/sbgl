/**
  @author Jon Soeder <jon@chicago.com>

  @example

    import setting from 'settings'

    const brandingSettings = setting('branding')
    const colorSettings = setting('branding.colors')

*/
const { keyBy, mapValues, result } = runtime.lodash

const req = require.context('!!json-loader!yaml-loader!.', false, /\.yml$/)

const data = mapValues(
  keyBy(req.keys(), k => k.replace(/^\.\//, '').replace(/\.yml$/, '')),
  (value, key) => req(value)
)

const token = (phraseKey, defaultVal) => result(data, phraseKey, defaultVal)

module.exports = global.settings = Object.assign(token, data, {
  __data__: data
})
