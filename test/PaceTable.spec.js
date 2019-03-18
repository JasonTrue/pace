import PaceTable from '@/components/PaceTable.vue'
import { mount } from '@vue/test-utils'

describe('PaceTable', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PaceTable)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
