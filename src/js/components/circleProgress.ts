function handleCircleMeasure(
  percent: number,
  measure: number,
  svg: SVGElement,
  backCircle: SVGCircleElement,
  frontCircle: SVGCircleElement
) {
  let radius = (measure / 2) - 3;
  let circleLength = 2 * Math.PI * radius;
  let percentToValue = circleLength - (circleLength * percent / 100);

  svg.setAttribute('width', `${measure}`);
  svg.setAttribute('height', `${measure}`);
  svg.setAttribute('viewBox', `0 0 ${measure} ${measure}`);

  backCircle.setAttribute('r', `${radius}`);
  backCircle.setAttribute('cx', `${radius + 3}`);
  backCircle.setAttribute('cy', `${radius + 3}`);
  backCircle.setAttribute('stroke-dasharray', `${circleLength}`);

  frontCircle.setAttribute('r', `${radius}`);
  frontCircle.setAttribute('cx', `${radius + 3}`);
  frontCircle.setAttribute('cy', `${radius + 3}`);
  frontCircle.setAttribute('stroke-dashoffset', `${percentToValue}`);
  frontCircle.setAttribute('stroke-dasharray', `${circleLength}`);
}

export function circleProgress() {
  const list = document.querySelectorAll('.circle-progress');

  list.forEach((item) => {
    let el = item as HTMLDivElement;
    let percent = parseInt(el.dataset.percent as string);

    let measure: number = 100;
    const measureList = []

    for (let measureAttr in el.dataset) {
      if (!measureAttr.includes('measure')) continue;
      measureList.push({
        breakpoint: parseInt(measureAttr.split('-')[1] || "1920"),
        measure: parseInt(el.dataset[measureAttr] || '') || 0
      });
    }

    measureList.sort((a, b) => a.breakpoint - b.breakpoint);

    for(let i = 0; i < measureList.length; i++) {

      if (document.body.clientWidth <= measureList[i].breakpoint) {
        measure = measureList[i].measure;
        break;
      }
    }

    const svg = item.querySelector('.svg') as SVGElement;
    const backCircle = item.querySelector('.placeholder') as SVGCircleElement;
    const frontCircle = item.querySelector('.progress') as SVGCircleElement;

    handleCircleMeasure(percent, measure, svg, backCircle, frontCircle);
  });
}