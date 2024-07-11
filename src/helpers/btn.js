const btn = (() => {
  const toggleHiddenContainer = (targetClass) => {
    const target = document.querySelector(targetClass);
    if (target.classList.contains("reveal")) {
      target.classList.remove("reveal");
    } else {
      target.classList.add("reveal");
    }
  };

  return { toggleHiddenContainer };
})();

export default btn;
