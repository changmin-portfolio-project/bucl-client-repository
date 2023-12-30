import { api } from '../index';

interface ProductDto {
  productName: string;
  productBrandName: string;
  productImagePathList: string[];
}

interface PurchaseOrderDto {
  productOrderCode: string;
  productOptionValue: string;
  productAmount: number;
  productOrderQty: number;
  productOrderAmount: number;
}

interface OrderDto {
  productDto: ProductDto;
  orderCode: string;
  orderDate: string;
  totalOrderAmount: number;
  spentAmount: number;
  rewardUseAmount: number;
  purchaseOrderDtos: PurchaseOrderDto[];
  confirmed: boolean;
}

interface ShpAddrDto {
  recipientNam: string;
  contactNumber: string;
  zipCode: string;
  address: string;
  addressDetail: string;
}

interface getOrderDetailResponse {
  data: {
    orderDto: OrderDto;
    shpAddrDto: ShpAddrDto;
    shippingInfoShippingFee: number;
    trackingNum: string | null;
  };
}

// 주문 상세정보 가져오기
export const getOrderDetail = (
  order_code: string,
): Promise<getOrderDetailResponse> => {
  return api
    .get(`/api/v1/orders/${order_code}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
