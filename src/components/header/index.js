import logo from '@/images/logo-sapo.png'
import './header.scss';

export function toggleNavMobile() {
  const button = document.querySelector('[data-js="navMobile"]');
  const header = document.querySelector('header');
  button?.addEventListener('click', () => {
    header?.classList.toggle('active');
  });
}

export const header = () => {
  const elementHtml = document.createElement('header')
  elementHtml.innerHTML = `<div class="header-container">
    <div class="logo">
      <img src="${logo}" alt="Logo da sapo em formato de origami na cor verde com o texto sapo escrito em branco">
    </div>
    <button class="icon-nav" data-js="navMobile" aria-label="abrir e fecha menu mobile"></button>
    <nav class="mobile">
      <ul>
        <li><a href="/">Lorem</a></li>
        <li><a href="/">Ipsum</a></li>
        <li><a href="/">Dolore</a></li>
      </ul>
    </nav>
    <nav class="desktop">
      <ul>
        <li><a href="/">Lorem</a></li>
        <li><a href="/">Ipsum</a></li>
        <li><a href="/">Dolore</a></li>
      </ul>
    </div>
  </div>`
  return elementHtml
}