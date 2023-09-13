import { Accordion } from "./accordion";

export function faq() {
const accordionList: NodeListOf<HTMLElement> = document.querySelectorAll(".accordion");

  accordionList.forEach((el) => {
    const accordion = new Accordion(el);
  });
}