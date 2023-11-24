export const getParameterFromUrl = (param: string) => {
  const value = new URLSearchParams(window.location.search).get(param);
  return value;
};
