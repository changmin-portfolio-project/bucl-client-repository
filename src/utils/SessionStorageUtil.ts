/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ORD_PAY_DATA } from '../const/SessionStorageVars';
import { OrderPaymentType } from '../global/interface/OrderInterface';

export function setOrderPaymentData<T extends keyof OrderPaymentType>(
  keys: T[],
  value: OrderPaymentType[T],
) {
  const ordPayDataSring = sessionStorage.getItem(ORD_PAY_DATA);
  if (ordPayDataSring === null) return;
  const orderPaymentData: OrderPaymentType = JSON.parse(ordPayDataSring);

  if (Array.isArray(keys)) {
    keys.forEach((key) => {
      orderPaymentData[key] = value;
      sessionStorage.setItem(ORD_PAY_DATA, JSON.stringify(orderPaymentData));
    });
  }
  console.error(
    'Invalid keys format. Please provide an array of strings or keyof OrderPaymentType.',
  );
}
