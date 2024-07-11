const copy = (targetId) => {
  const target = document.querySelector(targetId);
  target.select();
  target.setSelectionRange(0, 99999);
  navigator.clipboard
    .writeText(target.value)
    .then(() => {
      target.nextSibling.classList.add("confirm");
    })
    .catch((err) => {
      throw err;
    });
};
export default copy;
