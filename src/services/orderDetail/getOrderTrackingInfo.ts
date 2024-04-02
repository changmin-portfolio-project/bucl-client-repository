import { privateApi } from '../index';
import { ShpAddrDto } from './getOrderInfo';

interface UserTrackingInfo {
  track: Track;
}

interface Track {
  lastEvent: LastEvent;
  events: Events;
}

interface Events {
  edges: edge[];
}

interface edge {
  node: Node;
}

interface Node {
  time: string;
  status: Status;
  description: string;
  location: Location;
}

interface Location {
  name: string;
}

interface LastEvent {
  time: string;
  status: Status;
  description: string;
}

interface Status {
  code: string;
  name: string;
}

export interface GetTrackingInfoDto {
  shpAddrDto: ShpAddrDto;
  trackingNum: string;
  userTrackingInfo: UserTrackingInfo;
}

// 주문 상세정보 가져오기
export const getOrderTrackingInfo = (
  order_code: string,
): Promise<GetTrackingInfoDto> => {
  return privateApi
    .get(`/api/v1/orders/${order_code}/tracking-info`)
    .then((res) => {
      console.log(res.data);
      return res.data.data;
    })
    .catch((err) => {
      throw err;
    });
};
