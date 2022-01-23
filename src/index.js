import {
  header,
  toggleNavMobile,
  selectColor,
  handleChangeToColor,
  brand,
  toggleText,
  heels,
  handleHells,
  footer,
} from '@/components/'
import '@/styles/index.scss'

const app = document.querySelector('#root')
const headerTemplate = header();
const selectColorTemplate = selectColor();
const brandTemplate = brand();
const heelsTemplate = heels();
const footerTemplate = footer();
app.append(headerTemplate, selectColorTemplate, brandTemplate, heelsTemplate, footerTemplate)

toggleNavMobile();
handleChangeToColor();
toggleText();
handleHells();