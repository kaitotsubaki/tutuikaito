var qtd = 0;

function trocarTexto() {
    if(qtd%2 == 0){
        document.getElementById('text').innerHTML = "Nem 1 milhão de linhas de código seriam capazes de registrar o carinho que sinto por você, Tutu <3";
        document.getElementById('button').innerHTML = "- Clique neste botão para ler a mensagem inicial -";
    } else {
        document.getElementById('text').innerHTML = "<span>Feliz dois anos</br>para minha ex! Bia Braga Colucci &#10084;";
        document.getElementById('button').innerHTML = "- Clique neste botão para ler a mensagem secreta -";
    }
    qtd++;
}