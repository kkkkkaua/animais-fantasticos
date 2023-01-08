export default class AnimaNumero {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    //bind no this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this)
  }

  //recebe um elemento no DOM com numero em
  //seu texto, incrementa a partir de 0 até o
  //numero final.
  static incrementarNumero(n) {
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
  }

  //ativa incrementar numero para cada numero
  //selecionado no DOM
  animaNumero() {
    this.numeros.forEach(n => this.constructor.incrementarNumero(n))
  }

  //funcao que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animaNumero()
    }
  }

  //adiciona o MutationObserver para verificar
  //quando a classe ativo é adicionada
  //ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
