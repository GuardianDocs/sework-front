export const getParameterFromUrl = (param: string) => {
  if (typeof window !== 'undefined') {
    const value = new URLSearchParams(window.location.search).get(param);
    return value;
  }
  return null;
};
