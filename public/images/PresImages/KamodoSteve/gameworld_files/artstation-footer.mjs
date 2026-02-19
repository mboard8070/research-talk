
//WF_INJECTED_START
;(() => { window.__epic_games_footer_geoip_country_code = "US"; })();
//WF_INJECTED_END
import { r as i, i as c, t as h } from "./lit-shared-CFTGSJeC.mjs";
import { s as m, F as u } from "./footer-Dvj4NHV7.mjs";
const p = { id: "cm83gt6hu196b07o6zyetpfmn", brandName: "artstation", propertyLogo: { logo: { id: "cmb81xhr93wm507o5514u50is", height: 32, url: "https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhr93wm607o5eem2hop6", width: 149 }, iconOnlyLogo: null, logoAlt: null, locale: "en" }, socialIcons: [{ logoAlt: "Facebook", icon: "facebook", href: "https://www.facebook.com/artstationhq" }, { logoAlt: "Twitter", icon: "twitter_x", href: "https://twitter.com/artstationhq" }, { logoAlt: "Instragram", icon: "instagram", href: "https://instagram.com/artstationhq" }], newsletterButton: null, footerColumns: [], footerCopyright: { text: "© {year}, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.  " }, backToTopButton: { endIcon: "arrow_up_circle", label: "Back to top", href: null }, footerBottomLinks: { items: [{ key: null, label: "Company", owner: null, relativePath: null, hrefTemplate: "https://www.artstation.com/about/company", localesWhitelist: null, countryCodesWhitelist: null }, { key: null, label: "Support", owner: null, relativePath: null, hrefTemplate: "https://help.artstation.com/", localesWhitelist: null, countryCodesWhitelist: null }, { key: null, label: "Terms of service", owner: null, relativePath: null, hrefTemplate: "https://www.artstation.com/tos", localesWhitelist: null, countryCodesWhitelist: null }, { key: null, label: "Privacy policy", owner: null, relativePath: null, hrefTemplate: "https://www.artstation.com/privacy", localesWhitelist: null, countryCodesWhitelist: null }, { key: null, label: "Impressum", owner: null, relativePath: null, hrefTemplate: "https://www.epicgames.com/site/de/impressum?lang=de", localesWhitelist: null, countryCodesWhitelist: "DE" }] }, footerTagsLegal: null }, w = { en: p };
var g = Object.getOwnPropertyDescriptor, f = (o, r, s, a) => {
  for (var t = a > 1 ? void 0 : a ? g(r, s) : r, e = o.length - 1, n; e >= 0; e--)
    (n = o[e]) && (t = n(t) || t);
  return t;
};
let l = class extends u {
  constructor() {
    super(...arguments), this.domain = "https://www.artstation.com/", this.allPageData = w, this.hygraphLocaleMapping = {
      en: "en-US"
    };
  }
};
l.styles = c`
		${i(m)}
	`;
l = f([
  h("artstation-footer")
], l);
export {
  l as ArtstationFooter
};

    