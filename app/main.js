let livros = []

const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivros();



async function getBuscaLivros() {
    const res = await fetch(endpointAPI)
    livros = await  res.json()
    let livrosDesconto = aplicaDesconto(livros)
    exibirLivros(livrosDesconto)
}

