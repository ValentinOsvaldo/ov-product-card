import React, { createContext } from 'react';
import { useProduct } from '../hooks';
import {
  onChangeArgs,
  Product,
  ProductContextProps,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface Props {
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className || ''}`} style={style}>
        {children({
          count: counter,
          maxCount,
          product,
          isMaxCountReached,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
