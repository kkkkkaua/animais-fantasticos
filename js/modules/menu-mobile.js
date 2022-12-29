import outsideClick from './outsideclick.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const eventos = ['click', 'touchstart']

  if (menuButton) {
    function openMenu(event) {
      menuButton.classList.add('ativo')
      menuList.classList.add('ativo')
      outsideClick(menuList, ['click', 'touchstart'], () => {
        menuButton.classList.remove('ativo')
        menuList.classList.remove('ativo')
      })
    }

    eventos.forEach(userEvent =>
      menuButton.addEventListener(userEvent, openMenu)
    )
  }
}
