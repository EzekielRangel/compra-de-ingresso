

function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0){
        alert('Vlaor invalido');
        return
    }



    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }

    if(tipo.value == 'superior'){
        comprarSup(qtd);
    }

    if(tipo.value == 'inferior'){
        comprarInf(qtd);
    }

}


function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade indisponivel para a pista');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra de ingresso para pista realizada');
    }
}

function comprarSup(qtd){
    let qtdCadSup = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdCadSup){
        alert('Quantidade indisponivel para as cadeiras superiores');
    } else{
        qtdCadSup = qtdCadSup - qtd;
        document.getElementById('qtd-superior').textContent = qtdCadSup;
        alert('Compra de ingresso para as cadeiras superiores realizada');
    }
}

function comprarInf(qtd){
    let qtdCadInf = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdCadInf){
        alert('Quantidade indisponivel para a fileira inferior');
    } else{
        qtdCadInf = qtdCadInf - qtd;
        document.getElementById('qtd-inferior').textContent = qtdCadInf;
        alert('Compra de ingresso para a fileira inferior realizada');
    }
}
