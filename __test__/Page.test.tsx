import React from "react";
import * as renderer from 'react-test-renderer';
import {render as amisRender} from '../src/reactJson';
import {PageRenderer} from '../src/reactJson/renders/page/Page';

test('Renderer:Page', () => {
  const component = renderer.create(
    amisRender({
      type: 'page'
    })
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});