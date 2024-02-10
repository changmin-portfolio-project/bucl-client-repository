import React from 'react';
import { postWithdrawal } from '../../../services/withdrawal/postWithdrawal';
import {
  rewardAccountAtom,
  withdrawalHistoryListAtom,
  withdrawalPointAtom,
} from '../../../states/withdrawalAtom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { RewardData } from '../../../services/withdrawal/getWithdrawalHistory';
import { rwdUseAmtAtom } from '../../../states/rewardAtom';

interface WithdrawBtnProps {
  isActive: boolean;
}

const WithdrawButton: React.FC<WithdrawBtnProps> = ({ isActive }) => {
  const setWithdrawalHistoryList = useSetRecoilState<RewardData[]>(
    withdrawalHistoryListAtom,
  );
  const [withdrawalPointStr, setWithdrawalPointStr] =
    useRecoilState(withdrawalPointAtom);
  const setRwdUseAmt = useSetRecoilState(rwdUseAmtAtom);
  const rewardAccount = useRecoilValue(rewardAccountAtom);

  const withdrawBtnOnClick = () => {
    if (!isActive) {
      return;
    }
    const withdrawalPoint = parseInt(withdrawalPointStr);
    if (withdrawalPoint >= 5000) {
      const data = {
        bankCodeStd: rewardAccount.bankCode,
        bankName: rewardAccount.bankName,
        withdrawalAmount: withdrawalPoint,
        accountNum: rewardAccount.accountNum,
        accountHolderName: rewardAccount.accountHolderName,
      };
      postWithdrawal(data)
        .then((res) => {
          const newWthrRes = [res];
          setWithdrawalHistoryList((prev) => [...newWthrRes, ...prev]);
          setWithdrawalPointStr('');
          setRwdUseAmt((prev) => prev - res.rewardWithdrawalAmount);

          alert('인출 되었습니다.');
        })
        .catch(() => {});
    } else {
      alert('5,000원 이상 넣어 주세요.');
    }
  };
  return <button onClick={() => withdrawBtnOnClick()}>인출하기</button>;
};

export default WithdrawButton;
