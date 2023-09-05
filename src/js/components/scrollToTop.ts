export function scrollToTop() {
  const elemList = document.querySelectorAll('.scroll-to-top');

  elemList.forEach(elem =>
    elem.addEventListener("mousedown",
      () => window.scrollTo({top: 0, behavior: 'smooth'})
    )
  )
}