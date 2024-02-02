import { api } from '../index';

export interface ProductDto {
  productName: string;
  productBrandName: string;
  productImagePathList: string[];
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
}

interface getOrderHistoryResponse {
  data: OrderDto[];
}

// my 주문내역
export const getOrderHistory = (
  pageNum: number,
): Promise<getOrderHistoryResponse> => {
  console.log(`/api/v1/orders?page=${pageNum}&pageSize=10`);
  return api
    .get(`/api/v1/orders?page=${pageNum}&pageSize=10`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
