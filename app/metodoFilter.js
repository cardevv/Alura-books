const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtraLivros))




function filtraLivros () {
     
    const elementobtn = document.getElementById(this.id)

    const categoria = elementobtn.value


    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosFiltrados)
}