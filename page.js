'use strict';
const situations = {
  unknown: ['Получить письменное основание', 'Попросите банк указать причину ограничения и норму закона. Проверьте отдельно, присвоен ли высокий риск на платформе ЗСК и применены ли меры по п. 5 ст. 7.7.', '#routes', 'Сравнить три порядка обращения ↓'],
  cbr: ['Обратиться в Банк России', 'Заявление о пересмотре высокого риска рассматривается в течение 15 рабочих дней. Если ЦБ откажет, можно обратиться в МВК в течение 6 месяцев после получения решения.', '#route-cbr', 'Подробнее о пересмотре в ЦБ ↓'],
  both: ['Обратиться сразу в МВК', 'При применении мер по п. 5 ст. 7.7 заявление направляют в МВК. Срок обращения: 6 месяцев с получения сообщения о мерах. Срок рассмотрения: 20 рабочих дней.', '#route-mvk', 'Подробнее об обращении в МВК ↓'],
  refusal: ['Сначала попросить банк пересмотреть отказ', 'Представьте сведения и документы по спорной операции или договору счёта. Банк рассматривает заявление в течение 7 рабочих дней. Если решение не изменится, следующий шаг: МВК.', '#route-bank', 'Подробнее о пересмотре отказа ↓'],
  other: ['Уточнить отдельный порядок обжалования', 'Ограничения ФНС, по 161-ФЗ и другим основаниям требуют отдельного разбора. Порядок ЗСК из этой памятки может не подходить. Начните с письменного основания ограничения.', '#contact', 'Обсудить основание ограничения ↓']
};
const choice = document.getElementById('situation');
function updateRoute() {
  const [title, text, href, link] = situations[choice.value] || situations.unknown;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-text').textContent = text;
  const resultLink = document.getElementById('result-link');
  resultLink.href = href;
  resultLink.textContent = link;
}
choice.addEventListener('change', updateRoute);
window.addEventListener('pageshow', updateRoute);
updateRoute();
const themeButton = document.getElementById('theme');
const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : colorScheme.matches;
  themeButton.setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
}
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : colorScheme.matches;
  document.documentElement.dataset.theme = dark ? 'light' : 'dark';
  updateThemeButton();
});
colorScheme.addEventListener('change', updateThemeButton);
updateThemeButton();
