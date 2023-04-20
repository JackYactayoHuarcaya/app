let active = true;
let actionDesplegue = () => {
  const nav = document.getElementById("nav-container-app");

  if (active === true) {
    nav.style.top = `0%`;
    nav.style.transition = ".5s";
    active = false;
  } else {
    nav.style.top = `-100%`;
    nav.style.transition = ".5s";
    active = true;
    if (nav.offsetTop < 0) {
      nav.style.top = `0%`;
      nav.style.transition = ".5s";
      active = false;
    }
  }
};
let Hamburguer = () => {
  return (
    <div
      onClick={actionDesplegue}
      className="hamburguer-app bg-slate-700 md:hidden z-50"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default Hamburguer;
