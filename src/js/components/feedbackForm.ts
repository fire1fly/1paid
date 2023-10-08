export function feedbackForm() {
  const openBtn = document.querySelector(".sfb-btn-open");
  const closeBtn = document.querySelector(".sfb-btn-close");
  const sendBtn = document.querySelector(".sfb-btn-submit") as HTMLButtonElement;
  const form = document.querySelector(".sfb-form");
  const field = document.querySelector(".sfb-form-input") as HTMLTextAreaElement;

  openBtn?.addEventListener("click", () => {
    form?.classList.add("_active");
    document.documentElement.classList.add("overflow-hidden");
  });

  closeBtn?.addEventListener("click", () => {
    form?.classList.remove("_active");
    document.documentElement.classList.remove("overflow-hidden");
  });

  field?.addEventListener("input", e => {
    const target = e.target as unknown as HTMLTextAreaElement;
    if (target.value.length !== 0) {
      sendBtn?.classList.add("_active");
      sendBtn!.disabled = false;
    } else {
      sendBtn?.classList.remove("_active");
      sendBtn!.disabled = true;
    }
  });

  field?.addEventListener("focus", () => {
    field.classList.add("_active");
  });

  field?.addEventListener("blur", (e) => {
    const target = e.target as unknown as HTMLTextAreaElement;
    if (target.value.length === 0) {
      field.classList.remove("_active");
    }
  });
}