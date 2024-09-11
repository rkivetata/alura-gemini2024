
function pesquisar(){
    var section = document.getElementById("resultados-de-pesquisa");

    var inputPesquisa = document.getElementById("input-pesquisa").value;
    console.log(inputPesquisa);

    inputPesquisa = inputPesquisa.toLowerCase();

    var nome = "";

    var descricao = "";

    var tags = "";
    
    var resultados = "";
    
    if (!inputPesquisa) {
        section.innerHTML = "<span>Seu campo de pesquisa está vazio.</span>"
        return;
    } 


    //ADICIONANDO O LAÇO FOR PARAREPETIR A CONCATENAÇÃO DO ITEM ADICIONADO MAIS O PRÓXIMO
    for (let dado of personagens) {

        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
       
        if (nome.includes(inputPesquisa) || descricao.includes(inputPesquisa) || tags.includes(inputPesquisa))  {
            //para cada dado do 'objeto' 'dados' o laço vai seguir a concatenação, assim colocando o item e o próximo

            resultados += `
            <div class="personagem-pesquisado">
                <h2>
                    <a href="#" target="_blank" class="titulo">${dado.nome}</a> 
                </h2>
                <p class="descricao">${dado.descricao}</p>
            </div>
        `;
            //o lacço add os   itens dele 'titulo', 'descricao' e 'link' agr na var 'dado'
            //VAI SER USADO ISSO PARA DECLARAR QUE A VAR SECTION AGORA TEM O ESPAÇO DA SECTION "resultados-pesquisa" E ELE RECEBE NO SEU HTML TODOS ESSES PARAMETROS
        } 

    }

    if (resultados == "") {
        resultados = "<p>Nenhum item encontrado</p>"
    }

    // fora do for a var 'section' agr recebe o valor jác alculado do loop
    section.innerHTML = resultados;

}



