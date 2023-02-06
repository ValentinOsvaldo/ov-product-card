import React from "react";
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import {  product2 } from '../data/products';

describe('Product Image', () => {
  test('Debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  test('Debe mostrar el componente correctamente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
