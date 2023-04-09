const painelDeSelecaoDePersonagem = document.querySelectorAll('.personagem')

painelDeSelecaoDePersonagem.forEach(personagem => {

    personagem.addEventListener("mouseenter", () => {

        const personagemSelecionado = document.querySelector(".selecionado")
        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado")

        const audioMenu = document.querySelector(".audio-menu")
        audioMenu.play()
    })
})

painelDeSelecaoDePersonagem.forEach(personagem => {

    personagem.addEventListener("click", () => {

        const audioMenu = document.querySelector(".audio-menu")
        audioMenu.play()

        const personagemDaSelecaoEscolhido = document.querySelector(".escolhido")
        personagemDaSelecaoEscolhido.classList.remove("escolhido")

        personagem.classList.add("escolhido")
   
        const personagemEscolhido = document.querySelector(".personagem-jogador-1")
        personagemEscolhido.classList.add("escolha-selecionada")

        const btnJogar = document.querySelector(".btn-jogar")
        btnJogar.classList.add("ativo")

        const idPersonagemSelecionado = personagem.attributes.id.value

        const nomeDoPersonagemSelecionado = document.getElementById("nome-jogador")
        nomeDoPersonagemSelecionado.innerHTML = idPersonagemSelecionado

        const iamgemDoPersonagemDoJogador1 = document.getElementById("personagem-jogador-1")
        iamgemDoPersonagemDoJogador1.src = `src/img/${idPersonagemSelecionado}.png`

        const audioPersonagem = document.getElementById("audio-personagens")
        audioPersonagem.src = `src/audio/${idPersonagemSelecionado}.mp3`
        audioPersonagem.play()
    })
})

