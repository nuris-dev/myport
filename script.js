// ===== Бургер-меню =====
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

function toggleMenu(open) {
  menu.classList.toggle('is-open', open);       // анимацию делает CSS (max-height)
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
}
// Клик по бургеру: открыть / закрыть
burger.addEventListener('click', () => toggleMenu(!menu.classList.contains('is-open')));
// Клик по пункту меню: закрыть
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));

// ===== Переключение темы =====
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'light' ? '☀' : '☾';
}
// При загрузке берём сохранённую тему (по умолчанию тёмная)
applyTheme(localStorage.getItem('theme') || 'dark');

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('theme', next);           // запоминаем выбор
});

// ===== Кнопка «Наверх» =====
const toTop = document.getElementById('toTop');

// Показываем кнопку после прокрутки на 300px
window.addEventListener('scroll', () => {
  toTop.classList.toggle('is-visible', window.scrollY > 300);
});
// Плавная прокрутка в начало страницы
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
