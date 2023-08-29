export function liveFeed() {
  const layoutPageGrid = document.querySelector('.layout-page');
  const liveFeed = document.querySelector('.lf');
  const toggleBtn = document.querySelector('.lf-toggle');

  toggleBtn?.addEventListener("mousedown", () => {
    layoutPageGrid?.classList.toggle("_lf-row");
    liveFeed?.classList.toggle("_lf-row");
  });
}