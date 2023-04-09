const inicioDaTela = document.getElementById("tela-inicial")
const clickNoStart = document.getElementById("start")
const creditos = document.getElementById("btn-creditos") 
const voltarParaOMenuPrincipal = document.getElementById("voltar")
const voltarParaTelaPrincipal = document.getElementById("btn-sair")

inicioDaTela.addEventListener("mouseenter", () => {
     const audioMenu = document.querySelector(".audio-menu")
    audioMenu.play()

})

inicioDaTela.addEventListener("click", () => {
    
    const usuarioClickTela = document.querySelector(".start")
    usuarioClickTela.classList.add("click-na-tela")

    const audioClick = document.querySelector(".audio-click")
    audioClick.play()
})

clickNoStart.addEventListener("click", () => {
    const audioClick = document.querySelector(".audio-click")
    audioClick.play()

    const esconterNomeDoJogo = document.querySelector(".ativo")
    esconterNomeDoJogo.classList.remove("ativo")

    const esconterStart = document.querySelector(".start")
    esconterStart.classList.add("esconder-click")

    const mostrarMenuPrincial = document.querySelector(".menu-principal")
    mostrarMenuPrincial.classList.add("escolha-de-opcao")

    const mostrarFundoDoMenu = document.querySelector(".mostrar-menu")
    mostrarFundoDoMenu.classList.remove("mostrar-menu")
    
})

creditos.addEventListener("click", () => {
    const audioClick = document.querySelector(".audio-click")
    audioClick.play()
    const mostrarCriditos = document.querySelector(".nome")
    mostrarCriditos.classList.add("mostrar")

    const esconderMenuPrincipal = document.querySelector(".menu-principal")
    esconderMenuPrincipal.classList.remove("escolha-de-opcao")

    const mostarBTNVoltar = document.querySelector(".voltar")
    mostarBTNVoltar.classList.add("mostrar")
})

voltarParaOMenuPrincipal.addEventListener("click", () => {
    const audioClick = document.querySelector(".audio-click")
    audioClick.play()
    console.log(voltarParaOMenuPrincipal );
    const esconderNome = document.querySelector(".nome")
    esconderNome.classList.remove("mostrar")

    const mostrarMunuDenovo = document.querySelector(".menu-principal")
    mostrarMunuDenovo.classList.add("escolha-de-opcao")

    const esconderBTNVoltar = document.querySelector(".mostrar")
    esconderBTNVoltar.classList.remove("mostrar")
})

voltarParaTelaPrincipal.addEventListener("click", () => {
    const audioClick = document.querySelector(".audio-click")
    audioClick.play()

    const esconderMenu = document.querySelector(".menu-principal")
    esconderMenu.classList.remove("escolha-de-opcao")

    const mostrarNomeDoJogo = document.querySelector(".titulo")
    mostrarNomeDoJogo.classList.add("ativo")

    const mostrarFundoDaTelaPrincipal = document.querySelector(".body")
    mostrarFundoDaTelaPrincipal.classList.add("mostrar-menu")

    const removeEcorderClick = document.querySelector(".start")
    removeEcorderClick.classList.remove("esconder-click")
    
})
