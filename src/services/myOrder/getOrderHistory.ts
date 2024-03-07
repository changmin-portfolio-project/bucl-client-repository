import { privateApi } from '../index';

export interface ProductDto {
  productName: string;
  productBrandName: string;
  imagePath: string;
  productCode: number;
}

export interface PurchaseOrderDto {
  productOrderCode: string;
  productOptionValue: string;
  productAmount: number;
  productOrderQty: number;
  productOrderAmount: number;
}

export interface OrderDto {
  productDto: ProductDto;
  orderCode: string;
  orderDate: string;
  totalOrderAmount: number;
  spentAmount: number;
  rewardUseAmount: number;
  purchaseOrderDtos: PurchaseOrderDto[];
  confirmed: boolean;
  orderStatus: string;
}

interface getOrderHistoryResponse {
  data: OrderDto[];
}

// my 주문내역
export const getOrderHistory = (
  pageNum: number,
): Promise<getOrderHistoryResponse> => {
  return privateApi
    .get(`/api/v1/orders?page=${pageNum}&pageSize=10`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
