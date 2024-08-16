function obterValoresSelecionados(selectId) {
    const select = document.getElementById(selectId);
    const selecionados = Array.from(select.selectedOptions).map(option => option.value);
    return selecionados.join(', ');
}

function atualizarSelecionados() {
    
    const saboresSelecionados = obterValoresSelecionados('sabor');
    const tiposSelecionados = obterValoresSelecionados('tipo');

    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `Sabores selecionados: ${saboresSelecionados}\nTipos selecionados: ${tiposSelecionados}`;
}

function enviarPedido() {
    
    atualizarSelecionados();

    
    alert("Pedido enviado com sucesso!");
}


atualizarSelecionados();