const theme = (() => {
  const init = () => {
    let hour = new Date().getHours();
    const body = document.getElementsByTagName("body")[0];
    if (hour >= 18 || hour < 6) {
      body.setAttribute("class", "theme--dark");
    } else {
      body.setAttribute("class", "theme--default");
    }
  };
  const handleThemeToggle = () => {
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("theme--default")) {
      body.setAttribute("class", "theme--dark");
    } else {
      body.setAttribute("class", "theme--default");
    }
  };
  return {
    init,
    handleThemeToggle,
  };
})();

export default theme;
