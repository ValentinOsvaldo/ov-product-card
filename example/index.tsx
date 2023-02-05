import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={ product }
        initialValues={{
          maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImage className="custom-img" />
            <ProductTitle className="white-text" />
            <ProductButtons className="custom-buttons" />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
