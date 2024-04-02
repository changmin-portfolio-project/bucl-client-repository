export const ORDERED = 'ORDERED'; //주문됨, 발주 처리 안됨
export const ORDERED_PROCESSING = 'ORDERED_PROCESSING'; //주문됨, 발주 넣음
export const ORDERED_IN_DELIVERY = 'ORDERED_IN_DELIVERY'; //주문됨, 배송 중
export const ORDERED_DELIVERED = 'ORDERED_DELIVERED'; // 주문됨, 배송 완료
export const ORDERED_DELAY = 'ORDERED_DELAY'; // 주문됨, 배송 지연
export const ORDER_CANCEL = 'ORDER_CANCEL'; //주문 취소 요청
export const ORDER_CANCELING = 'ORDER_CANCELING'; //주문 취소 처리중
export const ORDER_CANCELED = 'ORDER_CANCELED'; //주문 취소됨
export const ORDER_EXCHANGE = 'ORDER_EXCHANGE'; //교환 요청
export const ORDER_EXCHANGING = 'ORDER_EXCHANGING'; //교환 처리중
export const ORDER_EXCHANGED = 'ORDER_EXCHANGED'; //교환됨
export const ORDER_RETURN = 'ORDER_RETURN'; //반품 요청
export const ORDER_RETURNING = 'ORDER_RETURNING'; // 반품 처리 중
export const ORDER_RETURNED = 'ORDER_RETURNED'; // 반품됨

export const MOME_CNT_MAX_NUM = 50;

export const ORDER_STATUS = {
  ORDERED: '결제 완료',
  ORDER_CANCELING: '주문 취소중',
  ORDER_CANCELED: '주문 취소',
  ORDER_EXCHANGING: '상품 교환중',
  ORDER_EXCHANGED: '상품 교환',
  ORDER_RETURNING: '반품 처리중',
  ORDER_RETURNED: '반품 완료',
  ORDERED_PROCESSING: '상품 준비중',
  ORDERED_IN_DELIVERY: '배송 중',
  ORDERED_DELIVERED: '배송 완료',
};

export const orderStatusNameFunc = (orderStatus: string): string => {
  const orderStatusKeys = Object.keys(ORDER_STATUS);
  const orderStatusValues = Object.values(ORDER_STATUS);

  for (let i = 0; i < orderStatusKeys.length; i++) {
    if (orderStatusKeys[i] === orderStatus) {
      return orderStatusValues[i];
    }
  }
  return '해당 없음';
};

export const checkNotOrderStatus = (orderStatus: string): boolean => {
  switch (orderStatus) {
    case ORDER_CANCEL:
      return true;
    case ORDER_CANCELING:
      return true;
    case ORDER_CANCELED:
      return true;
    case ORDER_EXCHANGE:
      return true;
    case ORDER_EXCHANGING:
      return true;
    case ORDER_EXCHANGED:
      return true;
    case ORDER_RETURN:
      return true;
    case ORDER_RETURNING:
      return true;
    case ORDER_RETURNED:
      return true;
    default:
      return false;
  }
};

export const ORDER_OBJECT_RESET = '{}';
