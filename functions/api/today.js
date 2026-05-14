import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';

export async function onRequest(context) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const adDate = `${year}-${month}-${day}`;

  const bsDateRaw = adToBs(adDate);
  const [bsYearRaw, bsMonthRaw, bsDayRaw] = bsDateRaw.split('-');
  const bsYear = parseInt(bsYearRaw);
  const bsMonth = parseInt(bsMonthRaw);
  const bsDay = parseInt(bsDayRaw);

  function getDaysInBsMonth(y, m) {
    for (let d = 32; d >= 28; d--) {
      try {
        bsToAd(`${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`);
        return d;
      } catch (e) {}
    }
    return 30;
  }

  const daysInMonth = getDaysInBsMonth(bsYear, bsMonth);
  const daysTillMonthEnd = daysInMonth - bsDay;

  const response = {
    status: "success",
    data: {
      ad: { date: adDate, year: parseInt(year), month: parseInt(month), day: parseInt(day) },
      bs: { date: bsDateRaw, year: bsYear, month: bsMonth, day: bsDay, daysInMonth, daysTillMonthEnd }
    },
    meta: { generatedAt: new Date().toISOString() }
  };

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
