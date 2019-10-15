import { mount } from '@vue/test-utils';
import BlogSideField from '@/components/blog-side-field.vue';

describe('main-header.vue', () => {
  const wrapper = mount(BlogSideField);

  it('class name', () => {
    expect(wrapper.classes()).toContain('blog-side-field');
  });

  it('change top correctly', () => {
    wrapper.setData({ scrollTop: 96 });
    expect(wrapper.attributes().style).toBe('top: 96px;');
  });
});
