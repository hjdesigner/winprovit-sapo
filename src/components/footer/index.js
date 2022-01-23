import socialNetworks from '@/images/social-networks.png'
import './footer.scss';


export const footer = () => {
  const elementHtml = document.createElement('footer')
  elementHtml.innerHTML = `<div class="socialNetWorks">
    <img src="${socialNetworks}" />
  </div>`
  return elementHtml
}