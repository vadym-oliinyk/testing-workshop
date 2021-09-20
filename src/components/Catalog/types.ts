export interface CatalogProps {
  products: FormattedProduct[];
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
}
