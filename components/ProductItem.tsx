import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
  };
}

// shallow compare

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

// memo - when use it
/**
 * 1. Pure Functional components (components that abstracts a visual portion of the app. Functions that as the params are the same, always returns same result)
 * 2. Components that renders too often
 */