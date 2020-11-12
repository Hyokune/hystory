import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import SideNavigation from '.';

const setup = (props?: object) => shallow(<SideNavigation {...props} />);

describe('SideNavigation component', () => {
  let wrapper: ShallowWrapper;

  it('render left link', () => {
    const props = {
      leftRoute: {
        href: '/route',
        text: 'Link Label'
      }
    };

    wrapper = setup(props);

    const leftLink = wrapper.find({ href: props.leftRoute.href });
    expect(leftLink.exists()).toBe(true);
    expect(leftLink.find('a').text()).toEqual(`< ${props.leftRoute.text}`);
  });

  it('render right link', () => {
    const props = {
      rightRoute: {
        href: '/route',
        text: 'Link Label'
      }
    };

    wrapper = setup(props);

    const rightLink = wrapper.find({ href: props.rightRoute.href });
    expect(rightLink.exists()).toBe(true);
    expect(rightLink.find('a').text()).toEqual(`${props.rightRoute.text} >`);
  });
});
