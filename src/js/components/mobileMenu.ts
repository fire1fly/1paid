export function mobileMenu() {
  const menuEl = document.querySelector('.mmenu');
  const btnOpen = document.querySelector('.mmenu-open');
  const btnClose = document.querySelector('.mmenu-close');

  btnOpen?.addEventListener("click", () => {
    menuEl?.classList.add("_active");
    btnOpen?.classList.add("_active");
    document.body.classList.add("overflow-hidden");
  });
  btnClose?.addEventListener("click", () => {
    menuEl?.classList.remove("_active");
    btnOpen?.classList.remove("_active");
    document.body.classList.remove("overflow-hidden");
  });
}