export function sidebar() {
  const sidebarEl = document.querySelector('.menu');
  const toggleBtn = document.querySelector('.menu-open');

  toggleBtn?.addEventListener("click", () => {
    toggleBtn?.classList.toggle("_to-open");
    sidebarEl?.classList.toggle("_hide");
  });

  if (document.documentElement.clientWidth <= 1200) {
    document.addEventListener("click", (e) => {
      const target = e.target as unknown as HTMLElement
      const sidebar = target.closest(".menu");
      const btn = target.closest(".menu-open");
      if (!sidebar && !btn) {
        toggleBtn?.classList.remove("_to-open");
        sidebarEl?.classList.remove("_hide");
      }
    })
  }
}