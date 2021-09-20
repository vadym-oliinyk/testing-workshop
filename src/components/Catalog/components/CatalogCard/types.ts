export interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  isInCart: boolean;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
}
