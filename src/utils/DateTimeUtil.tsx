export const convertDtStrToDStr = (dateTimeString: string): string => {
  try {
    return dateTimeString.split('T')[0];
  } catch (e) {
    return '날짜를 표기 할 수 없습니다.';
  }
};

export const convertDtStrToDTStr = (dateTimeString: string): string => {
  try {
    const dateTime = new Date(dateTimeString);

    const formattedDateTime = `${dateTime.getFullYear()}-${String(
      dateTime.getMonth() + 1,
    ).padStart(2, '0')}-${String(dateTime.getDate()).padStart(
      2,
      '0',
    )}\n${String(dateTime.getHours()).padStart(2, '0')}:${String(
      dateTime.getMinutes(),
    ).padStart(2, '0')}:${String(dateTime.getSeconds()).padStart(2, '0')}`;
    return formattedDateTime;
  } catch (e) {
    return '날짜를 표기 할 수 없습니다.';
  }
};
