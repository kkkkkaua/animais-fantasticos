export default function initAnimaNumeros() {
  function animaNumero() {
    const numeros = document.querySelectorAll('[data-numero]')

    numeros.forEach(n => {
      const total = +n.innerText
      const incremento = Math.floor(total / 100)

      let start = 0
      const timer = setInterval(() => {
        start += incremento
        n.innerText = start
        if (start > total) {
          n.innerText = total
          clearInterval(timer)
        }
      }, 25)
    })
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animaNumero()
    }
  }

  const observerTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation)

  observer.observe(observerTarget, { attributes: true })
}
