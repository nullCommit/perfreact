import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
  };
  onAddToWishlist: (id: number) => void;
}

// shallow compare

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>
        Add to wishlist
      </button>
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
 * 1. Pure Functional components (components that abstracts a visual portion of the app. Functions that as the props are the same, always returns same result)
 * 2. Components that renders too often
 * 3. Components re-renders with same props
 * 4. Component medium to large size
 */
