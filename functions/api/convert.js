import { adToBs, bsToAd } from '../lib/nepali-converter.js';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const adDate = url.searchParams.get('ad');
  const bsDate = url.searchParams.get('bs');

  let responseObj = {};

  try {
    if (adDate) {
      const result = adToBs(adDate);
      responseObj = { status: "success", data: { provided: { type: "AD", date: adDate }, converted: { type: "BS", date: result } } };
    } else if (bsDate) {
      const result = bsToAd(bsDate);
      responseObj = { status: "success", data: { provided: { type: "BS", date: bsDate }, converted: { type: "AD", date: result } } };
    } else {
      responseObj = { status: "error", message: "Missing 'ad' or 'bs' query parameter. Example: ?ad=2024-05-14" };
    }
  } catch (error) {
    responseObj = { status: "error", message: "Invalid date format or out of bounds. Please use YYYY-MM-DD." };
  }

  return new Response(JSON.stringify(responseObj, null, 2), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
