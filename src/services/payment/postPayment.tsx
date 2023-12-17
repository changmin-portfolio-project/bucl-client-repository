import { api, formApi } from '../index';

interface postProductOption {
  productOrderAmt: number;
  productOrderQty: number;
  skuCode: number;
}

interface postPaymentPreparationResponse {
  amount: number;
  merchantUid: string;
  productCode: string;
  productOption: postProductOption;
}

interface postPaymentVerificationResponse {
  amount: number;
  merchantUid: string;
  productCode: string;
  productOption: postProductOption;
}

// 사전 검증
export const postPaymentPreparation = (
  spentAmount: number,
  productCode: string,
  skuCode: string,
  option_amount: number,
  option_qty: number,
  proctOptNom: string,
): Promise<postPaymentPreparationResponse> => {
  const merchant_uid = `mid_${new Date().getTime()}`;
  return api
    .post('/api/v1/payment/preparation', {
      merchantUid: merchant_uid,
      amount: spentAmount,
      productCode: productCode,
      productOption: {
        skuCode: skuCode,
        productOrderAmt: option_amount,
        productOrderQty: option_qty,
        proctOptNom: proctOptNom,
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      throw error;
    });
};

// 사후 검증
export const postPaymentVerification = (
  formData: FormData,
): Promise<postPaymentVerificationResponse> => {
  return formApi
    .post('/api/v1/payment/verification', formData)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
