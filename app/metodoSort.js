btnPreco = document.getElementById('btnOrdenarPorPreco');

btnPreco.addEventListener('click', OrdenaPreco())


function OrdenaPreco () {
 let livrosOrdenados = livros.sort( function (a , b) {

    return a - b 


 });

exibirLivros(livrosOrdenados)
    console.log(livrosOrdenados)
}