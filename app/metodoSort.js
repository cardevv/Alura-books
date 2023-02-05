btnPreco = document.getElementById('btnOrdenarPorPreco');

btnPreco.addEventListener('click', OrdenaPreco)



function OrdenaPreco () {
  
    let  livrosOrdenados = livros.sort((a,b) => a.preco - b.preco );


exibirLivros(livrosOrdenados)
    
}