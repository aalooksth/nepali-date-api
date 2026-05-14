// Nepali Date API - Cloudflare Pages Worker
// This file handles all API routing and date conversion logic.

// --- Library Code (Inlined for stability) ---
var s;
(function(n) {
  n.INVALID_DAY = "Day is invalid.", n.INVALID_YEAR = "Year is invalid.", n.INVALID_MONTH = "Month is invalid.", n.BS_DATE_OUT_OF_RANGE = "BS Date out of range", n.AD_DATE_OUT_OF_RANGE = "AD Date out of range", n.DATE_FORMAT_INVALID = "Date format is invalid", n.DATE_GREATER_THAN_TODAY = "Date cannot be greater then today";
})(s || (s = {}));
const T = s, t = [];
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

const A = {
  MAX_DAY: 32, MIN_DAY: 1, MAX_MONTH: 12, MIN_MONTH: 1, YEAR_LENGTH: 4,
  MAX_YEAR_AD: 2040, MAX_MONTH_AD: 31, MIN_YEAR_BS: 1978, MAX_YEAR_BS: 2099
};
const c = "1921-04-13";
const f = (n, o, e) => `${n}-${("0" + o).slice(-2)}-${("0" + e).slice(-2)}`;
const l = (n) => n.split("-").map(Number);

function E(n) {
  const [o, e, r] = l(n);
  if (r > A.MAX_DAY || r < A.MIN_DAY || !r) throw new Error(T.INVALID_DAY);
  if (e > A.MAX_MONTH || e < A.MIN_MONTH || !e) throw new Error(T.INVALID_MONTH);
  if (!o || o.toString().length !== A.YEAR_LENGTH) throw new Error(T.INVALID_YEAR);
  return { year: o, month: e, day: r };
}

function y(n) {
  const { year: o, month: e, day: r } = E(n);
  if (o > A.MAX_YEAR_AD) throw new Error(T.AD_DATE_OUT_OF_RANGE);
  if (e > A.MAX_MONTH_AD) throw new Error(T.INVALID_MONTH);
  return f(o, e, r);
}

function u(n) {
  const { year: o, month: e, day: r } = E(n);
  if (o < A.MIN_YEAR_BS || o > A.MAX_YEAR_BS) throw new Error(T.BS_DATE_OUT_OF_RANGE);
  if (r > t[o][e]) throw new Error(`No ${r} day exits in this month.`);
  return f(o, e, r);
}

function h(n, o = !0) {
  let e = 0, r = 0, D = 0, _ = 0, a = !1;
  for (let M = A.MIN_YEAR_BS; M <= A.MAX_YEAR_BS && !a; M++)
    for (let i = A.MIN_MONTH; i <= A.MAX_MONTH; i++)
      if (_ += t[M][i], n - _ < 0) {
        D = n - _ + t[M][i] + 1, a = !0, e = M, r = i;
        break;
      }
  return o ? f(e, r, D) : { currentYear: e, currentMonth: r, currentDay: D };
}

function adToBs(n) {
  n = y(n);
  const o = new Date(c), e = new Date(n), r = Math.floor((e.getTime() - o.getTime()) / 864e5);
  if (r < 0) throw new Error(T.AD_DATE_OUT_OF_RANGE);
  return h(r);
}

function bsToAd(n) {
  n = u(n);
  const [o, e, r] = l(n);
  let D = 0;
  for (let _ = A.MIN_YEAR_BS; _ <= o; _++)
    if (_ === o) {
      for (let a = A.MIN_MONTH; a < e; a++) D += t[_][a];
      D += r - 1;
    } else
      for (let a = A.MIN_MONTH; a <= A.MAX_MONTH; a++) D += t[_][a];
  const dt = new Date(c);
  dt.setDate(dt.getDate() + D);
  return f(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
}

function getDaysInBsMonth(y, m) {
  return t[y][m];
}

// --- Router Logic ---
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*"
    };

    // 1. /api/today.json
    if (path === "/api/today.json" || path === "/api/today") {
      const today = new Date();
      const adDate = f(today.getFullYear(), today.getMonth() + 1, today.getDate());
      const bsDateRaw = adToBs(adDate);
      const [bsYear, bsMonth, bsDay] = bsDateRaw.split("-").map(Number);
      const daysInMonth = getDaysInBsMonth(bsYear, bsMonth);

      const response = {
        status: "success",
        data: {
          ad: { date: adDate, year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() },
          bs: { date: bsDateRaw, year: bsYear, month: bsMonth, day: bsDay, daysInMonth, daysTillMonthEnd: daysInMonth - bsDay }
        },
        meta: { generatedAt: new Date().toISOString() }
      };
      return new Response(JSON.stringify(response, null, 2), { headers });
    }

    // 2. /api/convert
    if (path === "/api/convert") {
      const adParam = url.searchParams.get("ad");
      const bsParam = url.searchParams.get("bs");
      let responseObj = {};
      try {
        if (adParam) {
          const result = adToBs(adParam);
          responseObj = { status: "success", data: { provided: { type: "AD", date: adParam }, converted: { type: "BS", date: result } } };
        } else if (bsParam) {
          const result = bsToAd(bsParam);
          responseObj = { status: "success", data: { provided: { type: "BS", date: bsParam }, converted: { type: "AD", date: result } } };
        } else {
          responseObj = { status: "error", message: "Missing 'ad' or 'bs' parameter." };
        }
      } catch (e) {
        responseObj = { status: "error", message: e.message };
      }
      return new Response(JSON.stringify(responseObj, null, 2), { headers });
    }

    // 3. /api/bs/today/:part
    if (path.startsWith("/api/bs/today/")) {
      const part = path.split("/").pop();
      const today = new Date();
      const adDate = f(today.getFullYear(), today.getMonth() + 1, today.getDate());
      const bsDateRaw = adToBs(adDate);
      const [bsYear, bsMonth, bsDay] = bsDateRaw.split("-").map(Number);
      
      let result = "";
      switch (part) {
        case "date": result = bsDateRaw; break;
        case "year": result = String(bsYear); break;
        case "month": result = String(bsMonth); break;
        case "day": result = String(bsDay); break;
        case "days-in-month": result = String(getDaysInBsMonth(bsYear, bsMonth)); break;
        case "days-till-month-end": result = String(getDaysInBsMonth(bsYear, bsMonth) - bsDay); break;
        default: return env.ASSETS.fetch(request);
      }
      return new Response(result, { headers: { ...headers, "Content-Type": "text/plain;charset=UTF-8" } });
    }

    // Fallback to static assets
    return env.ASSETS.fetch(request);
  }
};
