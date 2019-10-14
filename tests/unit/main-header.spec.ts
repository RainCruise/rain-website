import { mount } from '@vue/test-utils';
import MainHeader from '@/components/main-header.vue';

describe('main-header.vue', () => {
  const wrapper = mount(MainHeader);

  it('class name is main-header', () => {
    expect(wrapper.classes()).toContain('main-header');
  });

  it('render border while isBorderShow is true', () => {
    wrapper.setData({ isBorderShow: true });
    expect(wrapper.classes()).toContain('has-border');
  });
});
