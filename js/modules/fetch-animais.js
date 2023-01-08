import AnimaNumero from './anima-numeros.js'

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    function criarAnimal(animal) {
      const div = document.createElement('div')
      div.classList.add('numero-animal')
      div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
      return div
    }

    try {
      const animaisResponse = await fetch(url)
      const animaisJson = await animaisResponse.json()
      const numerosGrid = document.querySelector('.numeros-grid')

      animaisJson.forEach(animal => {
        const divAnimal = criarAnimal(animal)
        numerosGrid.appendChild(divAnimal)
      })
      const animaNumero = new AnimaNumero('[data-numero]', '.numeros', 'ativo')
      animaNumero.init()
    } catch (erro) {
      console.log(erro)
    }
  }
  fetchAnimais('./animaisapi.json')
}
