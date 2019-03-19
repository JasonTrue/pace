import PaceTool from '@/components/PaceTable.vue'
import { mount } from '@vue/test-utils'

describe('PaceTool', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(PaceTool)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
