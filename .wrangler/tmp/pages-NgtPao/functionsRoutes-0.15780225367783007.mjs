import { onRequest as __api_bs_today__part__js_onRequest } from "D:\\OneDrive\\OneDrive - YCOTEK\\Personal\\@GIT\\nepali-date-api\\functions\\api\\bs\\today\\[part].js"
import { onRequest as __api_convert_js_onRequest } from "D:\\OneDrive\\OneDrive - YCOTEK\\Personal\\@GIT\\nepali-date-api\\functions\\api\\convert.js"
import { onRequest as __api_today_js_onRequest } from "D:\\OneDrive\\OneDrive - YCOTEK\\Personal\\@GIT\\nepali-date-api\\functions\\api\\today.js"

export const routes = [
    {
      routePath: "/api/bs/today/:part",
      mountPath: "/api/bs/today",
      method: "",
      middlewares: [],
      modules: [__api_bs_today__part__js_onRequest],
    },
  {
      routePath: "/api/convert",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_convert_js_onRequest],
    },
  {
      routePath: "/api/today",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_today_js_onRequest],
    },
  ]