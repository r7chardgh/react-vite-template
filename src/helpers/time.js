const time = (() => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return {
    getYear,
  };
})();

export default time;
