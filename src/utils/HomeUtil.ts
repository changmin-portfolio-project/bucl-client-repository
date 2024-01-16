import { HOME_INF_POS_NAME } from '../const/Pagenation';

export const saveBeforePos = (): void => {
  const homeInfContainer = document.getElementById(HOME_INF_POS_NAME);
  if (homeInfContainer !== null) {
    sessionStorage.setItem(
      HOME_INF_POS_NAME,
      homeInfContainer.scrollTop.toString(),
    );
  }
};
