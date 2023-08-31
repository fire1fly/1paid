export function liveFeed() {
  const layoutPageGrid = document.querySelector('.layout-page');
  const liveFeed = document.querySelector('.lf');
  const toggleBtn = document.querySelector('.lf-toggle');

  function toggle() {
    layoutPageGrid?.classList.toggle("_lf-row");
    liveFeed?.classList.toggle("_lf-row");
  }

  toggleBtn?.addEventListener("mousedown", toggle);

  if (document.documentElement.clientWidth <= 1200 ) {
    toggleBtn?.removeEventListener("mousedown", toggle);
    layoutPageGrid?.classList.add("_lf-row");
    liveFeed?.classList.add("_lf-row");
  }
}