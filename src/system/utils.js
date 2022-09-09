export function debounce(func) {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 120, event);
  };
}

export function createClamp({
  min,
  max,
  pointMax,
  pointMin,
  variableMetricUnit,
  constantMetricUnit,
  factorMultiplier,
}) {
  const factor = (max - min) / (pointMax - pointMin);
//   const roundedFactor = Math.round(100000 * factor) / 100000;
  const constant = max - factor * pointMax;
//   const roundedConstant = Math.round(constant);

  return `clamp(${min}${constantMetricUnit}, calc(${
    factorMultiplier * factor
  }${variableMetricUnit} + ${constant}${constantMetricUnit}), ${max}${constantMetricUnit})`;
}
