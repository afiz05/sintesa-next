import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        General: "General",
        "Sample Page": "Sample Page",
        "Support Ticket": "Support Ticket",
      },
    },
    cn: {
      translations: {
        General: "概览",
        "Sample Page": "示例页面",
        "Support Ticket": "支持工单",
      },
    },
    ae: {
      translations: {
        General: "عام",
        "Sample Page": "صفحة عينية",
        "Support Ticket": "تذكرة الدعم",
      },
    },
    du: {
      translations: {
        General: "Allgemein",
        "Sample Page": "Beispielseite",
        "Support Ticket": "Support-Ticket",
      },
    },
    es: {
      translations: {
        General: "General",
        "Sample Page": "Página de ejemplo",
        "Support Ticket": "Ticket de soporte",
      },
    },
    fr: {
      translations: {
        General: "Général",
        "Sample Page": "Page d'exemple",
        "Support Ticket": "Ticket de support",
      },
    },
    pt: {
      translations: {
        General: "Geral",
        "Sample Page": "Página de Exemplo",
        "Support Ticket": "Ticket de Suporte",
      },
    },
  },
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
