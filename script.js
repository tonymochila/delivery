
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
            
             document.getElementById('Rua').value = data.logradouro;
             document.getElementById('Bairro').value = data.bairro;
             document.getElementById('Cidade').value = data.localidade;
             document.getElementById('Estado').value = data.uf;
            })
        .catch(error => {
            console.error('Erro ao fazer a solicitação:', error);
        });

       // document.getElementById('texto').value = '';
 }
 else{
    document.getElementById('texto').value = '';
    document.getElementById('resultado').value = "dados incorretos";
 }
}

   // Seleciona todos os itens
   const items = document.querySelectorAll('.produtos');

   // Adiciona um evento de clique a cada item
   items.forEach(item => {
       item.addEventListener('click', () => {
           alert(item.textContent + ' foi clicado!');
       });
   });



function showContainer1() {
    document.getElementById('container1').classList.remove('hidden');
    document.getElementById('container1').classList.add('visible');
    document.getElementById('container2').classList.remove('visible');
    document.getElementById('container2').classList.add('hidden');
    document.getElementById('container3').classList.remove('visible');
    document.getElementById('container3').classList.add('hidden');
}

function showContainer2() {
    document.getElementById('container1').classList.remove('visible');
    document.getElementById('container1').classList.add('hidden');
    document.getElementById('container2').classList.remove('hidden');
    document.getElementById('container2').classList.add('visible');
    document.getElementById('container3').classList.remove('visible');
    document.getElementById('container3').classList.add('hidden');
}

function showContainer3() {
    document.getElementById('container1').classList.remove('visible');
    document.getElementById('container1').classList.add('hidden');
    document.getElementById('container2').classList.remove('visible');
    document.getElementById('container2').classList.add('hidden');
    document.getElementById('container3').classList.remove('hidden');
    document.getElementById('container3').classList.add('visible');
}