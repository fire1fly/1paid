export function productView() {
  const viewBtn = document.querySelector(".view-btn");
  const viewGrid = document.querySelector(".view-grid");

  viewBtn && viewGrid && viewBtn.addEventListener("click", () => {
    viewBtn.classList.toggle("_view-list");
    viewGrid.classList.toggle("_view-list");
  });
}