export interface CartCardProps {
  image: string;
  title: string;
  price: number;
  inCartAmount: number;
  onLess: () => void;
  onMore: () => void;
}
