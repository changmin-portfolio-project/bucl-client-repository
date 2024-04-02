import { atom } from 'recoil';
import { GetTrackingInfoDto } from '../services/orderDetail/getOrderTrackingInfo';

export const trackInfoAtom = atom<GetTrackingInfoDto>({
  key: 'trackInfo',
  default: {
    shpAddrDto: {
      recipientName: '',
      address: '',
      addressDetail: '',
      contactNumber: '',
      zipCode: '',
      memoContent: '',
    },
    trackingNum: '',
    userTrackingInfo: {
      track: {
        lastEvent: {
          time: '',
          status: { code: '', name: '' },
          description: '',
        },
        events: {
          edges: [],
        },
      },
    },
  },
});
