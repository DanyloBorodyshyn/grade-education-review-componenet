import { en, uk } from "./locales";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'uk',
    messages: {
      en,
      uk
    }
  }))
  