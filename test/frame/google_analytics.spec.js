/**
 * @jest-environment node
 */
import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'

describe('Google Analytics', () => {
  let nuxt = null
  beforeAll(async () => {
    const rootDir = resolve(__dirname, '../..')
    let config = {}
    try {
      config = require(resolve(rootDir, '../nuxt.config.js'))
    } catch (e) {}
    config.rootDir = rootDir // project folder
    config.dev = false // production build
    config.mode = 'universal' // Isomorphic application
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(4000, 'localhost')
  }, 30000)
  describe('GET /', () => {
    test('Google Analytics script reference is present', async () => {
      const context = {}
      const { html } = await nuxt.renderRoute('/', context)
      expect(html.includes('ga.js')).toBeTruthy()
    })
    test('pace.move.yuzuten.com ID is present', async () => {
      const context = {}
      const { html } = await nuxt.renderRoute('/', context)
      expect(html.includes('UA-112487101-2')).toBeTruthy()
    })
  })
  afterAll(() => {
    if (nuxt) {
      nuxt.close()
    }
  })
})
// // Example of testing only generated html
// // test('Route / exits and render HTML', async (t) => {
// //   const context = {}
// //   const { html } = await nuxt.server.renderRoute('/', context)
// //   t.true(html.includes('<h1 class="red">Hello world!</h1>'))
// // })
// //
// // Example of testing via dom checking
// // test('Route / exits and render HTML with CSS applied', async (t) => {
// //   const context = {}
// //   const { html } = await nuxt.server.renderRoute('/', context)
// //   const { window } = new JSDOM(html).window
// //   const element = window.document.querySelector('.red')
// //   t.not(element, null)
// //   t.is(element.textContent, 'Hello world!')
// //   t.is(element.className, 'red')
// //   t.is(window.getComputedStyle(element).color, 'red')
// // })
//
// // Close server and ask nuxt to stop listening to file changes
