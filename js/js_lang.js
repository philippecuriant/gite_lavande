function setLanguage(lang) {
  document.querySelectorAll('section#fr').forEach(sec => sec.style.display = lang === 'fr' ? '' : 'none');
  document.querySelectorAll('section#en').forEach(sec => sec.style.display = lang === 'en' ? '' : 'none');
  document.documentElement.lang = lang;
  localStorage.setItem('siteLang', lang);
}
window.onload = function() {
  const savedLang = localStorage.getItem('siteLang') || 'fr';
  setLanguage(savedLang);
};