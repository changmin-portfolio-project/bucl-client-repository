export const convertDtStrToDStr = (dateTimeString: string): string => {
  try {
    return dateTimeString.split('T')[0];
  } catch (e) {
    return '날짜를 표기 할 수 없습니다.';
  }
};
