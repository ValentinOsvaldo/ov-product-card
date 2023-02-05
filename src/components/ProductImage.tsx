import React, { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img ? img : product.img ?? noImage;

  return (
    <img
      src={imgToShow}
      alt="Product Image"
      className={`${styles.productImg} ${className || ''}`}
      style={style}
    />
  );
};
