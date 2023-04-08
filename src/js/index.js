const painelDeSelecaoDePersonagem = document.querySelectorAll('.personagem')

painelDeSelecaoDePersonagem.forEach(personagem => {

    personagem.addEventListener("mouseenter", () => {
        
        const personagemSelecionado = document.querySelector(".selecionado")
        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado")

        const idPersonagemSelecionado = personagem.attributes.id.value
        
        const nomeDoPersonagemSelecionado = document.getElementById("nome-jogador")
        nomeDoPersonagemSelecionado.innerHTML = idPersonagemSelecionado

        const iamgemDoPersonagemDoJogador1 = document.getElementById("personagem-jogador-1")
        iamgemDoPersonagemDoJogador1.src = `src/img/${idPersonagemSelecionado}.png`
        
    })
}) 



