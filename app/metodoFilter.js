const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtraLivros))




function filtraLivros () {
     
    const elementobtn = document.getElementById(this.id)

    const categoria = elementobtn.value


    let livrosFiltrados = categoria == 'disponivel' ? filtraDisponibilidade() : filtraCategoria(categoria)
    exibirLivros(livrosFiltrados)

    if ( categoria == 'disponivel') {

        exibirValorTotal ()

        

    }
    function exibirValorTotal () {
        const valorTotal = calculaTotal(livrosFiltrados)

        valorTotalLivros.innerHTML = `

        <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
        
        `


    }
}

function filtraCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtraDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
 


