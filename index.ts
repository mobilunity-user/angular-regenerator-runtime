import regeneratorRuntime from "regenerator-runtime"

if ("object" === (typeof window)) {
  (<any>window).regeneratorRuntime = regeneratorRuntime;
}
