# OV Product Card

I create my own package on NPM

## Example

```tsx
<ProductCard
  key={products[0].id}
  product={products[0]}
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
```
