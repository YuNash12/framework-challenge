document.addEventListener('DOMContentLoaded', () => {
  console.log('translate.js loaded — DOM ready');

  // Translation strings (extend this with all data-key entries)
  const translations = {
    en: {
      translateBtn: '中文 / English',
      heroTitle: 'Lantern Brew — Frequently Asked Questions',
      heroDesc: 'Everything you need to know about our coffee, ordering options, and our Hong Kong locations.',
      jumpToFAQBtn: 'Jump to FAQ',
      faqQ1: 'Do you offer plant-based milk alternatives?',
      faqA1: 'Yes — we carry oat, almond, and soya milk. All substitutions are +HK$6. Ask our barista for allergy details; cross-contact with dairy is possible.',
      faqQ2: 'Where are you located in Hong Kong?',
      faqA2: 'Our flagship store is in Central (Lan Kwai Fong). We also have a pop-up in Mong Kok on weekends. See the Visit section for hours and directions.',
      visitTitle: 'Visit Us',
      visitCentral: 'Central — Flagship',
      visitMongkok: 'Mong Kok — Pop-up (Weekends)'
      // Add more keys here...
    },
    zh: {
      translateBtn: 'English / 中文',
      heroTitle: '燈籠咖啡 — 常見問題',
      heroDesc: '您需要了解的有關我們咖啡、訂購選項及香港分店的信息。',
      jumpToFAQBtn: '跳至常見問題',
      faqQ1: '你們有提供植物奶嗎？',
      faqA1: '有 — 我們提供燕麥奶、杏仁奶和豆奶。每種替代奶加收HK$6。如需過敏資訊，請向咖啡師諮詢；乳製品可能交叉接觸。',
      faqQ2: '你們在香港哪裡有分店？',
      faqA2: '我們的旗艦店在中環（蘭桂坊）。週末也會在旺角有快閃店。請參閱訪問部分了解營業時間和路線。',
      visitTitle: '訪問我們',
      visitCentral: '中環 — 旗艦店',
      visitMongkok: '旺角 — 快閃店（週末）'
      // Add more keys here...
    }
  };

  // Start with stored language if any, otherwise english
  let currentLang = localStorage.getItem('siteLang') || 'en';

  // Helper to apply translation map to page
  function applyLanguage(lang) {
    console.log('Applying language:', lang);
    // loop over all elements that have data-key
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key; // e.g. "heroTitle"
      const text = translations[lang] && translations[lang][key];
      if (typeof text === 'undefined') {
        // no translation supplied for this key+lang: leave original and warn
        console.warn(`No translation for key "${key}" in "${lang}"`);
        return;
      }

      // If element is an input/textarea, set v
