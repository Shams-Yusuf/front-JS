const RATES = {
  usd: 0.011,
  eur: 0.01,
};
function convert(rub, currency) {
  if (!RATES[currency]) {
    return null;
  }
  return rub * RATES[currency];
}
