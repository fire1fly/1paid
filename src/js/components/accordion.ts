interface IConfig {
  alwaysOpen?: boolean;
  duration?: number;
}

export class Accordion {

  public _el: HTMLElement;
  public _config: IConfig;

  constructor(target: any, config?: IConfig) {
    this._el =  target;
    const defaultConfig = {
      alwaysOpen: false,
      duration: 200
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const target = e.target as unknown as HTMLElement;
      const elHeader = target.closest('.accordion-header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        this._el.querySelectorAll('.accordion-item_show').forEach((el) => {
          if (el.contains(elHeader.parentElement)) {
            return;
          }
          el !== elHeader.parentElement ? this.toggle(el as HTMLElement) : null;
        });
      }
      this.toggle(elHeader.parentElement as HTMLElement);
    });
  }
  show(el: HTMLElement) {
    const elBody = el.querySelector('.accordion-body') as HTMLElement;
    if (elBody.classList.contains('collapsing') || el.classList.contains('accordion-item_show')) {
      return;
    }
    elBody.style.display = 'block';
    const height = elBody.offsetHeight;
    elBody.style.height = '0';
    elBody.style.overflow = 'hidden';
    elBody.style.transition = `height ${this._config.duration}ms ease`;
    elBody.classList.add('collapsing');
    el.classList.add('accordion-item_slidedown');
    elBody.offsetHeight;
    elBody.style.height = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      el.classList.remove('accordion-item_slidedown');
      elBody.classList.add('collapse');
      el.classList.add('accordion-item_show');
      elBody.style.display = '';
      elBody.style.height = '';
      elBody.style.transition = '';
      elBody.style.overflow = '';
    }, this._config.duration);
  }
  hide(el: HTMLElement) {
    const elBody = el.querySelector('.accordion-body') as HTMLElement;
    if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion-item_show')) {
      return;
    }
    elBody.style.height = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style.display = 'block';
    elBody.style.height = '0';
    elBody.style.overflow = 'hidden';
    elBody.style.transition = `height ${this._config.duration}ms ease`;
    elBody.classList.remove('collapse');
    el.classList.remove('accordion-item_show');
    elBody.classList.add('collapsing');
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      elBody.classList.add('collapse');
      elBody.style.display = '';
      elBody.style.height = '';
      elBody.style.transition = '';
      elBody.style.overflow = '';
    }, this._config.duration);
  }
  toggle(el: HTMLElement) {
    el.classList.contains('accordion-item_show') ? this.hide(el) : this.show(el);
  }
}