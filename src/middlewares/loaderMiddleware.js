import { loaderView } from "../views/loaderView.js";

export function loaderMiddleware(ctx, next) {
  loaderView.hideLoader();
  next();
}
