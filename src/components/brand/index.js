import marcaSapoMobile from '@/images/marca-sapo-mobile.png'
import marcaSapoDesktop from '@/images/marca-sapo-desktop.png'
import barraBrand from '@/images/barra-brand.png';
import './brand.scss';

export const toggleText = () => {
  const button = document.querySelector('[data-js="tiggleText"]');
  const text = document.querySelector('[data-js="text"]');

  button?.addEventListener('click', () => {
    text?.classList.toggle('active');
  });
};

export const brand = () => {
  const elementHtml = document.createElement('main')
  elementHtml.classList.add('brand__container');
  elementHtml.innerHTML = `<div class="brand__wrapper">
    <div class="brand__obj1">
      <svg width="66" height="96" viewBox="0 0 66 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61.5524 90.1033L4.80892 67.2674L43.2145 7.75602L61.5524 90.1033Z" stroke="#33CC99" stroke-width="6"/>
      </svg>    
    </div>
    <div class="brand__obj4">
      <svg width="164" height="164" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="82" cy="82" r="79" stroke="#33CC99" stroke-width="6"/>
      </svg>
    </div>
    <div class="brand__titles">
      <h1 class="brand__title">marca</h1>
      <h2 class="brand__subtitle">Sapo</h2>
    </div>    
    <div class="brand__content">
      <div class="brand__content__image">
        <div class="brand__sapo-mobile">
          <img src="${marcaSapoMobile}" />
        </div>
        <div class="brand__sapo-desktop">
          <img src="${marcaSapoDesktop}" />
        </div>
      </div>
      <div class="brand__obj2--mobile">
        <svg width="317" height="317" viewBox="0 0 317 317" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="158.5" cy="158.5" r="155.5" stroke="#33CC99" stroke-width="6" stroke-dasharray="12 12"/>
        </svg>      
      </div>
      <div class="brand__obj2--desktop">
        <svg width="633" height="631" viewBox="0 0 633 631" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="316.5" cy="316.5" r="313.5" stroke="#33CC99" stroke-width="6" stroke-dasharray="12 12"/>
        </svg>      
      </div>
      <div class="brand__obj3">
        <button class="brand__toggle" data-js="tiggleText">
          <svg width="14" height="62" viewBox="0 0 14 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="7" fill="black"/>
            <circle cx="7" cy="31" r="7" fill="black"/>
            <circle cx="7" cy="55" r="7" fill="black"/>
          </svg>
        </button>        
      </div>
      <div class="brand__content__texts" data-js="text">
        <h3 class="brand__content__texts__title">Estamos consigo desde 1995, mas ainda mal começámos a tocar o futuro.</h3>
        <p class="brand__content__texts__text">Apostamos na credibilidade, na criatividade, na inovação, na tecnologia e na proximidade.</p>
        <p class="brand__content__texts__text">Somos o SAPO, vamos tornar a sua vida mais simples, mais informada, mais divertida, mais prática, aqui e em todo o mundo. Queremos estar na sua vida.</p>

        <div class="brand__links">
          <a href="https://videos.sapo.pt/bRi3wOIOTyf2cWDtNkpj?jwsource=cl" target="_blank" class="brand__links__a">Manifesto</a>
          <a href="https://videos.sapo.pt/niJFYO47fFYMVA638E6a?jwsource=cl" target="_blank" class="brand__links__a--diffent">O SAPO deu o salto</a>
        </div>
      </div>
    </div>
  </div>
  <div class="brand__barra">
    <img src="${barraBrand}" alt="Imagem que divide o conteúdo é branca no formato diagonal" />
  </div>`;
  return elementHtml
}