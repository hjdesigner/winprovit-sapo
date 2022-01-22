import sapo from '@/images/sapo.png';
import barra from '@/images/barra.png';
import './selectColor.scss';

export const handleChangeToColor = () => {
  const allButton = document.querySelectorAll('[data-js="changeToColor"]');

  allButton?.forEach((item) => {
    item.addEventListener('click', (e) => {
      const bodyPage = document.querySelector('body');
      const color = e.target.getAttribute('data-color');
      allButton?.forEach(item => item.classList.remove('active'));
      bodyPage.classList = '';
      e.target.classList.add('active');
      bodyPage.classList.add(color);;
    })
  })
};

export const selectColor = () => {
  const elementHtml = document.createElement('section')
  elementHtml.classList.add('containerSelectColor');
  elementHtml.innerHTML = `<div class="wrapper">
    <div class="objects-mobile">
      <div class="obj1">
        <svg width="69" height="50" viewBox="0 0 69 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4.09874" y="13.4979" width="10.857" height="63.2023" transform="rotate(-59.9654 4.09874 13.4979)" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
      <div class="obj2">
        <svg width="62" height="43" viewBox="0 0 62 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M53.9406 14.9121L18.4286 38.4537L4.86236 4.13881L53.9406 14.9121Z" stroke="#33CC99" stroke-width="6"/>
        </svg>      
      </div>
      <div class="obj3">
        <svg width="69" height="50" viewBox="0 0 69 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4.09874" y="13.4979" width="10.857" height="63.2023" transform="rotate(-59.9654 4.09874 13.4979)" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
      <div class="obj4">
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="39" cy="39" r="36" stroke="#33CC99" stroke-width="6"/>
        </svg>      
      </div>
      <div class="obj5">
        <svg width="93" height="90" viewBox="0 0 93 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M88.1175 6.8418L71.8007 85.3393L6.97396 58.4385L88.1175 6.8418Z" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
    </div>
    <div class="objects-desktop">
      <div class="obj1">
        <svg width="164" height="164" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="82" cy="82" r="79" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
      <div class="obj2">
        <svg width="184" height="188" viewBox="0 0 184 188" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.0137 181.612L4.70353 41.6736L177.624 4.92196L65.0137 181.612Z" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
      <div class="obj3">
        <svg width="97" height="139" viewBox="0 0 97 139" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4.10132" y="15.5577" width="21.9054" height="137.207" transform="rotate(-30.17 4.10132 15.5577)" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
      <div class="obj4">
        <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M91 47.5C91 72.1067 71.2707 92 47 92C22.7293 92 3 72.1067 3 47.5C3 22.8933 22.7293 3 47 3C71.2707 3 91 22.8933 91 47.5Z" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
      <div class="obj5">
        <svg width="82" height="120" viewBox="0 0 82 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M77.833 114.589L4.49103 85.0735L54.131 8.15401L77.833 114.589Z" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
      <div class="obj6">
        <svg width="97" height="139" viewBox="0 0 97 139" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4.10132" y="15.5577" width="21.9054" height="137.207" transform="rotate(-30.17 4.10132 15.5577)" stroke="#33CC99" stroke-width="6"/>
        </svg>
      </div>
    </div>
    <div class="buttons">
      <button class="button-green" data-js="changeToColor" data-color="green" aria-label="Click para mudar a cor do site para verde"></button>
      <button class="button-blue active" data-js="changeToColor" data-color="blue" aria-label="Click para mudar a cor do site para azul"></button>
      <button class="button-orange" data-js="changeToColor" data-color="orange" aria-label="Click para mudar a cor do site para laranja"></button>
    </div>    
  </div>
  <div class="sapo">
    <div class="sapo__wrapper">
      <img src="${sapo}" alt="Imagem de um sapo que o logo da empresa no formato origami" />
    </div>    
  </div>
  <div class="barra">
    <img src="${barra}" alt="Imagem que divide o conteúdo é cinza no formato diagonal" />
  </div>`;
  return elementHtml
}