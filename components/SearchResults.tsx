import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    title: string;
    price: number;
    priceFormatted: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToWishlist={onAddToWishlist}
          />
        );
      })}
    </div>
  );
}

// when use - useMemo
/**
 * 1. Heavy calculations (use only if it is really heavy calculations)
 * 2. Referential equality (when we pass that information to a child component)
 */

// when use - useCallback
/**
 * 1. To memorize a function
 */
