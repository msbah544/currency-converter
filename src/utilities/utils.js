let gmdStandard = {
  usd: 0.019,
  gbp: 0.014,
  aud: 0.027,
  cfa: 10.83,
};

function convert(amount, from, to) {
  let convertedAmount = 0;

  switch (from) {
    case "usd":
      convertedAmount = amount / gmdStandard.usd;
      break;
    case "gbp":
      convertedAmount = amount / gmdStandard.gbp;
      break;
    case "aud":
      convertedAmount = amount / gmdStandard.aud;
      break;
    case "cfa":
      convertedAmount = amount / gmdStandard.cfa;
      break;
    default:
      convertedAmount = amount;
      break;
  }

  switch (to) {
    case "usd":
      convertedAmount = convertedAmount * gmdStandard.usd;
      break;
    case "gbp":
      convertedAmount = convertedAmount * gmdStandard.gbp;
      break;
    case "aud":
      convertedAmount = convertedAmount * gmdStandard.aud;
      break;
    case "cfa":
      convertedAmount = convertedAmount * gmdStandard.cfa;
      break;
    default:
      convertedAmount = convertedAmount;
      break;
  }

  return convertedAmount;
}

export default convert;
