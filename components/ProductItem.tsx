import { memo, useState } from 'react';
import dynamic from 'next/dynamic';

import { AddProductToWishlistProps } from './AddProductToWishlist';
// import { AddProductToWishlist } from './AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import('./AddProductToWishlist').then(
      mod => mod.AddProductToWishlist
    );
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
  };
  onAddToWishlist: (id: number) => void;
}

// shallow compare

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
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
