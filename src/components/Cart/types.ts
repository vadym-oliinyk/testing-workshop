export interface CartProps {
  products: FormattedProduct[];
  onAmountChange: (id: number, amount: number) => void;
}
