interface DiscountRateCalculationProps {
  consumerPrice: number;
  salePrice: number;
}
const DiscountRateCalculation = ({
  consumerPrice,
  salePrice,
}: DiscountRateCalculationProps): number => {
  // 할인율 계산
  const newConsumerPrice = consumerPrice; // 원래 가격
  const newSalePrice = salePrice; // 할인된 가격
  const priceDifference = newConsumerPrice - newSalePrice;
  const discountPercentage = (priceDifference / consumerPrice) * 100;
  return discountPercentage;
};

export default DiscountRateCalculation;
