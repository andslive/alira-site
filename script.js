(() => {
  'use strict';
  const copy = window.ALIRA_COPY || {};
  const locales = ['pt-BR', 'es-CO', 'es-MX', 'es-AR'];
  const config = window.ALIRA_CONFIG || {};
  const storageKey = 'alira.language';
  const params = new URLSearchParams(window.location.search);
  let saved = null;
  try { saved = localStorage.getItem(storageKey); } catch (_) { /* Storage may be unavailable. */ }
  let current = locales.includes(params.get('lang')) ? params.get('lang') : locales.includes(saved) ? saved : 'pt-BR';

  function applyLanguage(locale) {
    if (!locales.includes(locale) || !copy[locale]) return;
    current = locale;
    const text = copy[locale];
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(text, key)) element.innerHTML = text[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const label = text[element.dataset.i18nAria];
      if (label) element.setAttribute('aria-label', label);
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === locale));
    });
    const page = document.body.dataset.page || 'home';
    const title = text[page + '.title'];
    if (title) document.title = title + (page === 'home' ? '' : ' | Alira');
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = text[page === 'home' ? 'home.description' : page === 'privacy' ? 'privacy.intro' : 'terms.p1'];
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || /^(?:#|https?:|mailto:|tel:)/i.test(href)) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      url.searchParams.set('lang', locale);
      link.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
    });
    if (/^\d{10,15}$/.test(config.whatsapp || '')) document.querySelectorAll('[data-contact="whatsapp"]').forEach(link => { link.href = 'https://wa.me/' + config.whatsapp; });
    if (/^\d{10,15}$/.test(config.whatsapp2 || '')) document.querySelectorAll('[data-contact="alternate"]').forEach(link => { link.href = 'https://wa.me/' + config.whatsapp2; });
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email || '')) document.querySelectorAll('[data-contact="email"]').forEach(link => { link.href = 'mailto:' + config.email; link.textContent = config.email; });
  }

  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => {
      const locale = button.dataset.language;
      applyLanguage(locale);
      try { localStorage.setItem(storageKey, current); } catch (_) { /* Keep the selector usable without storage. */ }
      const url = new URL(window.location.href);
      url.searchParams.set('lang', current);
      try { history.replaceState(null, '', url); } catch (_) { /* URL updates are optional. */ }
    });
  });
  applyLanguage(current);
})();
