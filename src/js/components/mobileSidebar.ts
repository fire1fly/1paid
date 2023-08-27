export function mobileSidebar() {
  const sidebarEl = document.querySelector('.menu');
  const toggleBtn = document.querySelector('.menu-open');

  toggleBtn?.addEventListener("click", () => {
    toggleBtn.classList.toggle("_to-open");
    sidebarEl?.classList.toggle("_hide");
  });
}