
window.addEventListener('keydown', function(event) {
    var tecla = event.key;
     if(tecla=="Enter" ){
        buscarDados()
     }
});


function buscarDados() {
    var textoDigitado = document.getElementById('texto').value;
    var cep=textoDigitado.trim()
    if(cep.length===8){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da API');
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
           
            // Manipula os dados recebidos
            console.log(data.uf)
            var dadosFormatados = `
            CEP: ${data.cep}
            Logradouro: ${data.logradouro}
            Bairro: ${data.bairro}
            Cidade: ${data.localidade}
            UF: ${data.uf}
            `;
             // Exibe os dados formatados na caixa de texto
             document.getElementById('resultado').value = dadosFormatados;
        })
        .catch(error => {
            console.error('Erro ao fazer a solicitação:', error);
        });

        document.getElementById('texto').value = '';
 }
 else{
    document.getElementById('texto').value = '';
    document.getElementById('resultado').value = "dados incorretos";
 }
}


function mudarTexto() {
   

    if(textoDigitado.length<1){
        alert("digite um cep")
    }
}  
