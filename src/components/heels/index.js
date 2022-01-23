import sapo from '@/images/sapo.png';
import barraHeels from '@/images/barra-heels.png';
import './heels.scss';

function isNumber(str) {
  const er = /^[0-9]+$/;
  return (er.test(str));
}

function showResult(result) {
  const resultText = document.querySelector('[data-js="heels"]');
  const jumpText = document.querySelector('[data-js="jumpText"]');
  const heelsText = document.querySelector('[data-js="heelsText"]');
  const flog = document.querySelector('[data-js="flog"]');
  resultText.innerHTML = '0'
  flog.classList.remove('success');

  resultText.innerHTML = parseInt(result);
  flog.classList.add('success');

  if (parseInt(result) === 1) {
    heelsText.classList.remove('active');
    jumpText.classList.add('active');
  } else {
    heelsText.classList.add('active');
    jumpText.classList.remove('active');
  }
}

function showErrors (x, y, d, body) {
  const error = document.querySelector('[data-js="error"]');
  error.innerHTML = '';

  if (x === '' || y === '' || d === '') {
    error.innerHTML = 'Preencha todos os campos';
    return  false
  }
  if (!isNumber(x) || !isNumber(y) || !isNumber(d)) {
    error.innerHTML = 'Por favor coloque apenas números';
    return false
  }
  if (Number(x) > Number(y)) {
    error.innerHTML = 'X tem que ser menor ou igual do que Y';
    return false
  }
  if (body === 'blue' && Number(x) > 7) {
    error.innerHTML = 'Na cor azul o x só aceita valor até 7';
    return false
  }
  if (body === 'green' && Number(x) !== 3) {
    error.innerHTML = 'Na cor verde o x só pode ser 3';
    return false
  }

  return true
}

export const handleHells = () => {
  const button = document.querySelector('[data-js="buttonHells"]');
  button?.addEventListener('click', () => {
    const body = document.querySelector('body').className;    
    const x = document.querySelector('[data-js="heelsX"]').value;
    const y = document.querySelector('[data-js="heelsY"]').value;
    const d = document.querySelector('[data-js="heelsD"]').value;
    
    const validate = showErrors(x, y, d, body);
    if (validate) {
      const result = (Number(x) + Number(y)) / Number(d);
      showResult(result);
    }
  });
}

export const heels = () => {
  const elementHtml = document.createElement('section')
  elementHtml.classList.add('heels__container');
  elementHtml.innerHTML = `<div class="heels__wrapper">
    <div class="heels__titles">
      <h1 class="heels__title">marca</h1>
      <h2 class="heels__subtitle">O SAPO deu <span data-js="heels">0</span> <span class="heels__text" data-js="jumpText">salto</span> <span class="heels__text active" data-js="heelsText">saltos</span></h2>
    </div>
    <div class="heels__forms">
      <div class="heels__fields">
        <input class="heels__input" type="text" value="" placeholder="X" data-js="heelsX" />
      </div>
      <div class="heels__fields">
        <input class="heels__input" type="text" value="" placeholder="Y" data-js="heelsY" />
      </div>
      <div class="heels__fields">
        <input class="heels__input" type="text" value="" placeholder="D" data-js="heelsD" />
      </div>
      <div class="heels__actions">
        <button class="heels__action__button" data-js="buttonHells">Dá o salto</button>
        <p class="heels__erro" data-js="error"></p>
      </div>
    </div>
    <div class="heels__objects">
      <div class="heels__obj1">
        <svg width="337" height="556" viewBox="0 0 337 556" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="15.5" width="29.4854" height="110.922" transform="rotate(-30 0 15.5)" fill="#33CC99"/>
          <rect x="86" y="164.743" width="29.4854" height="110.922" transform="rotate(-30 86 164.743)" fill="#33CC99"/>
          <rect x="171" y="311.743" width="29.4854" height="110.922" transform="rotate(-30 171 311.743)" fill="#33CC99"/>
          <rect x="256" y="459.743" width="29.4854" height="110.922" transform="rotate(-30 256 459.743)" fill="#33CC99"/>
        </svg>
      </div>
      <div class="heels__obj2" data-js="flog">
        <img src="${sapo}" alt="Imagem de um sapo que o logo da empresa no formato origami" />
      </div>
    </div>
  </div>  
  <div class="heels__barra">
    <img src="${barraHeels}" alt="Imagem que divide o conteúdo é branca no formato diagonal" />
  </div>`;
  return elementHtml
}