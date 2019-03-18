import PaceTool from '@/components/PaceTable.vue'
import { mount } from '@vue/test-utils'

describe('PaceTool', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PaceTool)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
