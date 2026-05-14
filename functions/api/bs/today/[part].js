import { adToBs, bsToAd } from '../../../lib/nepali-converter.js';

export async function onRequest(context) {
  const { params } = context;
  const part = params.part; // e.g., 'date', 'year', 'month'

  const today = new Date();
  const adDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  
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

  let result = '';
  switch (part) {
    case 'date': 
      result = bsDateRaw; 
      break;
    case 'year': 
      result = String(bsYear); 
      break;
    case 'month': 
      result = String(bsMonth); 
      break;
    case 'day': 
      result = String(bsDay); 
      break;
    case 'days-in-month': 
      result = String(getDaysInBsMonth(bsYear, bsMonth)); 
      break;
    case 'days-till-month-end': 
      result = String(getDaysInBsMonth(bsYear, bsMonth) - bsDay); 
      break;
    default:
      return new Response("Not Found", { status: 404 });
  }

  return new Response(result, {
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
