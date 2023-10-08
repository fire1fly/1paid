export function alerts() {

  const alertsList = document.querySelectorAll(".alert");

  alertsList.forEach(item => hideAlerts(item as HTMLElement, 3000, 300));

  function hideAlerts(element: HTMLElement, visibilityDuration: number, animationDuration: number) {
    setTimeout(() => {
      element.classList.add("_hiding");
    }, visibilityDuration);
    setTimeout(() => {
      element.remove();
    }, visibilityDuration + animationDuration);
  }
}