import { Props as ButtonsProps }     from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ImageProps }       from '../components/ProductImage';
import { Props as TitleProps }       from '../components/ProductTitle';

export interface Product {
  id:    string;
  img?:  string;
  title: string;
}

export interface ProductContextProps {
  counter:    number;
  increaseBy: (value: number) => void;
  product:    Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps)      :  JSX.Element;
  Buttons: (Props: ButtonsProps) => JSX.Element;
  Image:   (Props: ImageProps)   => JSX.Element;
  Title:   (Props: TitleProps)   => JSX.Element;
}

export interface onChangeArgs {
  count:   number;
  product: Product;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product,
  increaseBy: (value: number) => void;
  reset: () => void;
}
