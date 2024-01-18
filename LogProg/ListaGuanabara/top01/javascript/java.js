function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagens');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src='';
        document.body.style.background = '#FEDE55';
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src = '';
        document.body.style.background = '#DC610C';
    }else{
        //boa noite!
        img.src = '';
        document.body.style.background = '#503F61';
    }
}
