let livros = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivros();

const InserirLivros = document.querySelector('#livros')

async function getBuscaLivros() {
    const res = await fetch(endpointAPI)

    livros = await  res.json()
    console.table(livros)
    exibirLivros(livros)
}

function exibirLivros (listaLivros) {

    listaLivros.forEach(livro =>{
        InserirLivros.innerHTML(`
                    
        
        
        `)

    })

}