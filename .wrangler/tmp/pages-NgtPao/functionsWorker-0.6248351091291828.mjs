var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../node_modules/@sbmdkl/nepali-date-converter/dist/@sbmdkl/nepali-date-converter.es.js
var s;
(function(n) {
  n.INVALID_DAY = "Day is invalid.", n.INVALID_YEAR = "Year is invalid.", n.INVALID_MONTH = "Month is invalid.", n.BS_DATE_OUT_OF_RANGE = "BS Date out of range", n.AD_DATE_OUT_OF_RANGE = "AD Date out of range", n.DATE_FORMAT_INVALID = "Date format is invalid", n.DATE_GREATER_THAN_TODAY = "Date cannot be greater then today";
})(s || (s = {}));
var T = s;
var t = [];
t[1978] = [1978, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[1979] = [1979, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[1980] = [1980, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[1981] = [1981, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
t[1982] = [1982, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[1983] = [1983, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[1984] = [1984, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[1985] = [1985, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
t[1986] = [1986, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[1987] = [1987, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[1988] = [1988, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[1989] = [1989, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
t[1990] = [1990, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[1991] = [1991, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[1992] = [1992, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[1993] = [1993, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
t[1994] = [1994, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[1995] = [1995, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
t[1996] = [1996, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[1997] = [1997, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[1998] = [1998, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[1999] = [1999, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2e3] = [2e3, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2001] = [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2002] = [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2003] = [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2004] = [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2005] = [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2006] = [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2007] = [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2008] = [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
t[2009] = [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2010] = [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2011] = [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2012] = [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
t[2013] = [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2014] = [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2015] = [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2016] = [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
t[2017] = [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2018] = [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2019] = [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2020] = [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
t[2021] = [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2022] = [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
t[2023] = [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2024] = [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
t[2025] = [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2026] = [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2027] = [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2028] = [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2029] = [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
t[2030] = [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2031] = [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2032] = [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2033] = [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2034] = [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2035] = [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
t[2036] = [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2037] = [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2038] = [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2039] = [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
t[2040] = [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2041] = [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2042] = [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2043] = [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
t[2044] = [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2045] = [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2046] = [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2047] = [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
t[2048] = [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2049] = [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
t[2050] = [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2051] = [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
t[2052] = [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2053] = [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
t[2054] = [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2055] = [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2056] = [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30];
t[2057] = [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2058] = [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2059] = [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2060] = [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2061] = [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2062] = [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31];
t[2063] = [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2064] = [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2065] = [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2066] = [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31];
t[2067] = [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2068] = [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2069] = [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2070] = [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30];
t[2071] = [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2072] = [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2073] = [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
t[2074] = [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
t[2075] = [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2076] = [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
t[2077] = [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2078] = [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30];
t[2079] = [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2080] = [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30];
t[2081] = [2081, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31];
t[2082] = [2082, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2083] = [2083, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30];
t[2084] = [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
t[2085] = [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30];
t[2086] = [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
t[2087] = [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
t[2088] = [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30];
t[2089] = [2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
t[2090] = [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
t[2091] = [2091, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30];
t[2092] = [2092, 30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30];
t[2093] = [2093, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
t[2094] = [2094, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30];
t[2095] = [2095, 31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30];
t[2096] = [2096, 30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30];
t[2097] = [2097, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30];
t[2098] = [2098, 31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31];
t[2099] = [2099, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31];
var A = {
  MAX_DAY: 32,
  MIN_DAY: 1,
  MAX_MONTH: 12,
  MIN_MONTH: 1,
  YEAR_LENGTH: 4,
  MAX_YEAR_AD: 2040,
  MAX_MONTH_AD: 31,
  MIN_YEAR_BS: 1978,
  MAX_YEAR_BS: 2099
};
var c = "1921-04-13";
var f = /* @__PURE__ */ __name((n, o, e) => `${n}-${("0" + o).slice(-2)}-${("0" + e).slice(-2)}`, "f");
var l = /* @__PURE__ */ __name((n) => {
  const o = n.split("-");
  if (o.length !== 3)
    throw new Error(T.DATE_FORMAT_INVALID);
  return o.map(Number);
}, "l");
function E(n) {
  const [o, e, r] = l(n);
  if (r > A.MAX_DAY || r < A.MIN_DAY || !r)
    throw new Error(T.INVALID_DAY);
  if (e > A.MAX_MONTH || e < A.MIN_MONTH || !e)
    throw new Error(T.INVALID_MONTH);
  if (!o || o.toString().length !== A.YEAR_LENGTH)
    throw new Error(T.INVALID_YEAR);
  return { year: o, month: e, day: r };
}
__name(E, "E");
function y(n) {
  const { year: o, month: e, day: r } = E(n);
  if (o > A.MAX_YEAR_AD)
    throw new Error(T.AD_DATE_OUT_OF_RANGE);
  if (e > A.MAX_MONTH_AD)
    throw new Error(T.INVALID_MONTH);
  return f(o, e, r);
}
__name(y, "y");
function u(n) {
  const { year: o, month: e, day: r } = E(n);
  if (o < A.MIN_YEAR_BS || o > A.MAX_YEAR_BS)
    throw new Error(T.BS_DATE_OUT_OF_RANGE);
  if (r > t[o][e])
    throw new Error(`No ${r} day exits in this month.`);
  return f(o, e, r);
}
__name(u, "u");
function h(n, o = true) {
  let e = 0, r = 0, D = 0, _ = 0, a = false;
  for (let M = A.MIN_YEAR_BS; M <= A.MAX_YEAR_BS && !a; M++)
    for (let i = A.MIN_MONTH; i <= A.MAX_MONTH; i++)
      if (_ += t[M][i], n - _ < 0) {
        D = n - _ + t[M][i] + 1, a = true, e = M, r = i;
        break;
      }
  return o ? f(e, r, D) : { currentYear: e, currentMonth: r, currentDay: D };
}
__name(h, "h");
function w(n) {
  n = y(n);
  const o = new Date(c), e = new Date(n), r = Math.floor((e.getTime() - o.getTime()) / 864e5);
  if (r < 0)
    throw new Error(T.AD_DATE_OUT_OF_RANGE);
  return h(r);
}
__name(w, "w");
function I(n, o) {
  const e = new Date(n);
  e.setDate(e.getDate() + o);
  const r = e.getFullYear(), D = e.getMonth() + 1, _ = e.getDate();
  return f(r, D, _);
}
__name(I, "I");
function R(n) {
  n = u(n);
  const [o, e, r] = l(n);
  let D = 0;
  for (let _ = A.MIN_YEAR_BS; _ <= o; _++)
    if (_ === o) {
      for (let a = A.MIN_MONTH; a < e; a++)
        D += t[_][a];
      D += r - 1;
    } else
      for (let a = A.MIN_MONTH; a <= A.MAX_MONTH; a++)
        D += t[_][a];
  return I(c, D);
}
__name(R, "R");

// api/bs/today/[part].js
async function onRequest(context) {
  const { params } = context;
  const part = params.part;
  const today = /* @__PURE__ */ new Date();
  const adDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const bsDateRaw = w(adDate);
  const [bsYearRaw, bsMonthRaw, bsDayRaw] = bsDateRaw.split("-");
  const bsYear = parseInt(bsYearRaw);
  const bsMonth = parseInt(bsMonthRaw);
  const bsDay = parseInt(bsDayRaw);
  function getDaysInBsMonth(y2, m) {
    for (let d = 32; d >= 28; d--) {
      try {
        R(`${y2}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
        return d;
      } catch (e) {
      }
    }
    return 30;
  }
  __name(getDaysInBsMonth, "getDaysInBsMonth");
  let result = "";
  switch (part) {
    case "date":
      result = bsDateRaw;
      break;
    case "year":
      result = String(bsYear);
      break;
    case "month":
      result = String(bsMonth);
      break;
    case "day":
      result = String(bsDay);
      break;
    case "days-in-month":
      result = String(getDaysInBsMonth(bsYear, bsMonth));
      break;
    case "days-till-month-end":
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
__name(onRequest, "onRequest");

// api/convert.js
async function onRequest2(context) {
  const { request } = context;
  const url = new URL(request.url);
  const adDate = url.searchParams.get("ad");
  const bsDate = url.searchParams.get("bs");
  let responseObj = {};
  try {
    if (adDate) {
      const result = w(adDate);
      responseObj = { status: "success", data: { provided: { type: "AD", date: adDate }, converted: { type: "BS", date: result } } };
    } else if (bsDate) {
      const result = R(bsDate);
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
__name(onRequest2, "onRequest");

// api/today.js
async function onRequest3(context) {
  const today = /* @__PURE__ */ new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const adDate = `${year}-${month}-${day}`;
  const bsDateRaw = w(adDate);
  const [bsYearRaw, bsMonthRaw, bsDayRaw] = bsDateRaw.split("-");
  const bsYear = parseInt(bsYearRaw);
  const bsMonth = parseInt(bsMonthRaw);
  const bsDay = parseInt(bsDayRaw);
  function getDaysInBsMonth(y2, m) {
    for (let d = 32; d >= 28; d--) {
      try {
        R(`${y2}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
        return d;
      } catch (e) {
      }
    }
    return 30;
  }
  __name(getDaysInBsMonth, "getDaysInBsMonth");
  const daysInMonth = getDaysInBsMonth(bsYear, bsMonth);
  const daysTillMonthEnd = daysInMonth - bsDay;
  const response = {
    status: "success",
    data: {
      ad: { date: adDate, year: parseInt(year), month: parseInt(month), day: parseInt(day) },
      bs: { date: bsDateRaw, year: bsYear, month: bsMonth, day: bsDay, daysInMonth, daysTillMonthEnd }
    },
    meta: { generatedAt: (/* @__PURE__ */ new Date()).toISOString() }
  };
  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
__name(onRequest3, "onRequest");

// ../.wrangler/tmp/pages-NgtPao/functionsRoutes-0.15780225367783007.mjs
var routes = [
  {
    routePath: "/api/bs/today/:part",
    mountPath: "/api/bs/today",
    method: "",
    middlewares: [],
    modules: [onRequest]
  },
  {
    routePath: "/api/convert",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest2]
  },
  {
    routePath: "/api/today",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest3]
  }
];

// C:/Users/alok.shrestha.PDC10/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// C:/Users/alok.shrestha.PDC10/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");

// C:/Users/alok.shrestha.PDC10/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// C:/Users/alok.shrestha.PDC10/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-VkpnKq/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;

// C:/Users/alok.shrestha.PDC10/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-VkpnKq/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=functionsWorker-0.6248351091291828.mjs.map
