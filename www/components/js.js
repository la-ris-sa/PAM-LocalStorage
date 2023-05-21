var jogador
var equipe

function cadastrar(){
    jogador = document.getElementById('jogador').value
    equipe = document.getElementById('equipe').value

    localStorage.setItem(jogador, equipe)
}

function listar(){
    var lista = document.getElementById('lista');
    lista.innerHTML = '';
  
    for (var i = 0; i < localStorage.length; i++) {
      var jogador = localStorage.key(i);
      var equipe = localStorage.getItem(jogador);
  
      lista.innerHTML += "<p>" + jogador + " - " + equipe + "</p>";
    }
  }