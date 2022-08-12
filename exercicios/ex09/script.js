function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    // bom dia
    img.src = 'img/manha.png';
    document.body.style.background = '#A9B9D9';
  } else if (hora >= 12 && hora <= 18){
    // boa tarde
    img.src = 'img/tarde.png';
    document.body.style.background = '#D9A577';
  } else{
    // boa noite
    img.src = 'img/noite.png';
    document.body.style.background = '#025E73';
  }
}