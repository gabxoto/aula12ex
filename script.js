function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    var second = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${minute} minutos e ${second} segundos.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#F3AB7C'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#90A9BD'
    }else{
        // boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#1B2640'
    }
}
 


