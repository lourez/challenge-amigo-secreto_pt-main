let listaDeAmigos = [];

function adicionarAmigo() {
    let capturarTexto = document.querySelector('input').value;
    if (capturarTexto.trim() === "" ) {
        alert("Por favor, insira um nome.");
        limparCampo();
        return;
    } else if (listaDeAmigos.includes(capturarTexto.trim())) {
        alert('Este nome já foi inserido');
        limparCampo();
        return;
    }
    listaDeAmigos.push(capturarTexto.trim());
    let amigosAdicionados = document.getElementById('listaAmigos');
    amigosAdicionados.innerHTML = ""; 

    
    let ul = document.createElement('ul');
    listaDeAmigos.forEach(function(nome) {
        let li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
    amigosAdicionados.appendChild(ul);

    limparCampo();
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Nenhum amigo para sortear!');
        return;
    }
    let gerarSorteio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[gerarSorteio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSorteado;

    listaDeAmigos.splice(gerarSorteio, 1);

    let amigosAdicionados = document.getElementById('listaAmigos');
    amigosAdicionados.innerHTML = "";
    let ul = document.createElement('ul');
    listaDeAmigos.forEach(function(nome) {
        let li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
    amigosAdicionados.appendChild(ul);
}

function refazerTeste() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    limparCampo();
}

function limparCampo() {
    capturarTexto = document.querySelector('input');
    capturarTexto.value = '';
}