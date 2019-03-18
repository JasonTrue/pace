import PaceNavigator from '@/components/PaceNavigator.vue'
import { shallowMount as mount, RouterLinkStub } from '@vue/test-utils'

describe('PaceNavigator', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PaceNavigator, {
      stubs: { NuxtLink: RouterLinkStub }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
