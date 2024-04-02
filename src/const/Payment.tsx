import { ORDER_PAYMENT_PROCESSING_PATH } from './PathVar';
import { SERVER_IP } from './SettingVar';

export const KAKAO_PAY: string = 'KAKAO_PAY';
export const DANAL_PAY: string = 'DANAL_PAY';
export const CARD_PAY: string = 'card';
export const VERIFICATION_URL: string = `${SERVER_IP}${ORDER_PAYMENT_PROCESSING_PATH}`;
export const PAY_METHOD: string = 'card';
export const MIN_ORD_AMT: number = 1000;

export const IS_NEW_ADDR_TRUE_NUMBER = 1;
export const IS_NEW_ADDR_FALSE_NUMBER = 0;

export const MOBILE_PG_TID_NAME = 'mobile_pg_tid_';
export const MERCHANT_UID_NAME = 'mid_';
