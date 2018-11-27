import regeneratorRuntime from "regenerator-runtime/runtime";

if ("object" === (typeof window)) {
  (<any>window).regeneratorRuntime = regeneratorRuntime;
}
