// lib/checkout.js — helpers compartidos por FinalCta, Closing y StickyCta para
// que cada superficie de compra comparta el mismo builder de URL y analytics.
import { copy } from "./copy";

export const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/zdrave-grickalice";

export function buildCheckoutUrl() {
  if (typeof window === "undefined") return BASE_CHECKOUT_URL;
  try {
    const params = new URLSearchParams(window.location.search);
    let src = params.get("src");
    let fbclid = params.get("fbclid");
    if (!src) src = localStorage.getItem("hotmart_src");
    if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");

    if (!src && !fbclid) return BASE_CHECKOUT_URL;
    const u = new URL(BASE_CHECKOUT_URL);
    if (src) u.searchParams.set("src", src);
    if (fbclid) u.searchParams.set("fbclid", fbclid);
    return u.toString();
  } catch (e) {
    return BASE_CHECKOUT_URL;
  }
}

export function fireBeginCheckout(priceString) {
  let priceNum = 0;
  if (priceString) {
    const cleaned = String(priceString).replace(/[^\d.,]/g, "").replace(",", ".");
    const parsed = parseFloat(cleaned);
    if (Number.isFinite(parsed)) priceNum = parsed;
  }
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "begin_checkout",
      value: priceNum,
      currency: "USD",
      items: [
        {
          item_id: "snacks_saludables_ebook",
          item_name: copy.metadata.productName,
          price: priceNum,
        },
      ],
    });
  }
}
