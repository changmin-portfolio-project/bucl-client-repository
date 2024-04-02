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
import { MIN_WDRL_AMT } from '../../../const/WithdrawalVar';
import { STATUS_BAD_REQUEST } from '../../../const/StatusCode';

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
    if (withdrawalPoint >= MIN_WDRL_AMT) {
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
        .catch((res) => {
          console.error(res);
          if (res.response.status === STATUS_BAD_REQUEST) {
            alert('값을 인위적으로 바꿔서 인출 오류났습니다.');
          } else {
            alert('인출 오류났습니다.');
          }
        });
    } else {
      alert(`${MIN_WDRL_AMT.toLocaleString()}원 이상 넣어 주세요.`);
    }
  };
  return <button onClick={() => withdrawBtnOnClick()}>인출하기</button>;
};

export default WithdrawButton;
